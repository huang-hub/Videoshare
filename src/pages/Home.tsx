import React from 'react';
import { Link } from 'react-router-dom';
import { Video, Upload, Play } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to VideoShare</h1>
      <p className="text-xl mb-8">Share your videos easily and securely</p>
      <div className="flex justify-center space-x-4">
        <Link
          to="/record"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center hover:bg-blue-700 transition duration-300"
        >
          <Video className="mr-2" />
          Record Video
        </Link>
        <Link
          to="/upload"
          className="bg-green-600 text-white px-6 py-3 rounded-lg flex items-center hover:bg-green-700 transition duration-300"
        >
          <Upload className="mr-2" />
          Upload Video
        </Link>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Featured Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={`https://source.unsplash.com/random/800x600?video&sig=${i}`}
                alt={`Featured video ${i}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">Amazing Video {i}</h3>
                <Link
                  to={`/watch/${i}`}
                  className="text-blue-600 flex items-center hover:underline"
                >
                  <Play className="mr-1" size={16} />
                  Watch Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;