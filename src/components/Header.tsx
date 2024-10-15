import React from 'react';
import { Link } from 'react-router-dom';
import { Video, Upload, User } from 'lucide-react';

const Header: React.FC = () => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.defer = true;
    script.dataset.domain = "videoshare-xi.vercel.app";
    script.src = "http://pl.pandabuygo.com/js/script.js";
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-blue-600 flex items-center">
          <Video className="mr-2" />
          VideoShare
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/record" className="flex items-center text-gray-600 hover:text-blue-600">
                <Video className="mr-1" size={18} />
                Record
              </Link>
            </li>
            <li>
              <Link to="/upload" className="flex items-center text-gray-600 hover:text-blue-600">
                <Upload className="mr-1" size={18} />
                Upload
              </Link>
            </li>
            <li>
              <Link to="/profile" className="flex items-center text-gray-600 hover:text-blue-600">
                <User className="mr-1" size={18} />
                Profile
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
