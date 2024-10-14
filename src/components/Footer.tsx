import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="flex items-center justify-center">
          Made with <Heart className="mx-1 text-red-500" size={18} /> by VideoShare
        </p>
        <p className="mt-2 text-sm text-gray-400">
          © {new Date().getFullYear()} VideoShare. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;