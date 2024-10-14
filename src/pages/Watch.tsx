import React from 'react';
import { useParams } from 'react-router-dom';

const Watch: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // In a real application, you would fetch the video data based on the id
  const videoData = {
    title: `Amazing Video ${id}`,
    description: 'This is a placeholder description for the video.',
    url: 'https://example.com/video.mp4', // Replace with actual video URL
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{videoData.title}</h1>
      <div className="bg-black aspect-video mb-4">
        <video
          className="w-full h-full"
          controls
          src={videoData.url}
          poster={`https://source.unsplash.com/random/800x600?video&sig=${id}`}
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p className="text-gray-700">{videoData.description}</p>
      </div>
    </div>
  );
};

export default Watch;