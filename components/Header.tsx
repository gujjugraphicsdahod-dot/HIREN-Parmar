
import React from 'react';
import VerifiedIcon from './icons/VerifiedIcon';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col md:flex-row items-start gap-8">
      <div className="flex-shrink-0">
        <div className="w-40 h-40 rounded-full bg-gradient-to-br from-yellow-400 via-red-500 to-purple-600 p-1">
          <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-orange-500 leading-tight">
              ગુજ્જુ<br/>ગ્રાફિક્સ
            </span>
          </div>
        </div>
      </div>

      <div className="flex-grow">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
          <h1 className="text-3xl font-light">gujjegraphics</h1>
          <div className="flex items-center gap-2">
            <button className="bg-blue-500 text-white font-semibold px-6 py-1.5 rounded-lg text-sm hover:bg-blue-600 transition-colors">Follow</button>
            <button className="bg-gray-200 text-gray-800 font-semibold px-4 py-1.5 rounded-lg text-sm hover:bg-gray-300 transition-colors">Message</button>
          </div>
        </div>

        <div className="flex items-center space-x-8 mb-4">
          <div><span className="font-bold">554</span> posts</div>
          <div><span className="font-bold">1,115</span> followers</div>
          <div><span className="font-bold">7,499</span> following</div>
        </div>

        <div>
          <h2 className="font-bold">Design&advertising🛷</h2>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <span>gujjegraphics</span>
            <VerifiedIcon className="w-4 h-4 text-blue-500" />
          </div>
          <p className="mt-2 text-sm">
            Graphic Designer<br />
            📧 Social Media Designer<br />
            💻 Canva & Photoshop Expert<br />
            🌐 Helping brands grow online
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
