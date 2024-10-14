import React from 'react';
import { User, CreditCard } from 'lucide-react';

const Profile: React.FC = () => {
  // Simulated user data
  const user = {
    email: 'user@example.com',
    id: '123456789',
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <User className="text-gray-400 mr-2" size={24} />
          <h2 className="text-xl font-semibold">Account Information</h2>
        </div>
        <p className="mb-2"><strong>Email:</strong> {user.email}</p>
        <p className="mb-4"><strong>User ID:</strong> {user.id}</p>
        
        <div className="flex items-center mb-4 mt-8">
          <CreditCard className="text-gray-400 mr-2" size={24} />
          <h2 className="text-xl font-semibold">Subscription</h2>
        </div>
        <p className="mb-4">You are currently on the Free plan.</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
          Upgrade to Pro
        </button>
      </div>
    </div>
  );
};

export default Profile;