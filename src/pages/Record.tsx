import React, { useState, useRef, useCallback } from 'react';
import { Video, StopCircle, RotateCcw, Monitor } from 'lucide-react';

const Record: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedBlob, setRecordedBlob] = useState<Blob | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const startRecording = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: { cursor: 'always' },
        audio: true,
      });
      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      const chunks: BlobPart[] = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'video/webm' });
        setRecordedBlob(blob);
        if (videoRef.current) {
          videoRef.current.srcObject = null;
          videoRef.current.src = URL.createObjectURL(blob);
        }
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error starting recording:', error);
    }
  }, []);

  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
    }
  }, []);

  const resetRecording = useCallback(() => {
    setRecordedBlob(null);
    if (videoRef.current) {
      videoRef.current.src = '';
    }
  }, []);

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Record Your Screen</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <video ref={videoRef} className="w-full h-auto mb-4" controls />
        <div className="flex justify-center space-x-4">
          {!isRecording && !recordedBlob && (
            <button
              onClick={startRecording}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition duration-300"
            >
              <Monitor className="mr-2" />
              Start Recording
            </button>
          )}
          {isRecording && (
            <button
              onClick={stopRecording}
              className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-red-700 transition duration-300"
            >
              <StopCircle className="mr-2" />
              Stop Recording
            </button>
          )}
          {recordedBlob && (
            <>
              <button
                onClick={resetRecording}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-gray-700 transition duration-300"
              >
                <RotateCcw className="mr-2" />
                Reset
              </button>
              <a
                href={URL.createObjectURL(recordedBlob)}
                download="recorded-video.webm"
                className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-green-700 transition duration-300"
              >
                <Video className="mr-2" />
                Download Video
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Record;