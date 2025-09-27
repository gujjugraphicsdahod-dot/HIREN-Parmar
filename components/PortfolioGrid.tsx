
import React from 'react';

const portfolioImages = [
  'https://i.imgur.com/k2H1eD5.png', 'https://i.imgur.com/k2H1eD5.png', 'https://i.imgur.com/k2H1eD5.png',
  'https://i.imgur.com/k2H1eD5.png', 'https://i.imgur.com/k2H1eD5.png', 'https://i.imgur.com/k2H1eD5.png',
  'https://i.imgur.com/eE2ud4T.png', 'https://i.imgur.com/eE2ud4T.png', 'https://i.imgur.com/eE2ud4T.png',
  'https://i.imgur.com/eE2ud4T.png', 'https://i.imgur.com/eE2ud4T.png', 'https://i.imgur.com/eE2ud4T.png',
  'https://i.imgur.com/k2H1eD5.png', 'https://i.imgur.com/k2H1eD5.png', 'https://i.imgur.com/k2H1eD5.png',
  'https://i.imgur.com/k2H1eD5.png', 'https://i.imgur.com/k2H1eD5.png', 'https://i.imgur.com/k2H1eD5.png',
];

const PortfolioGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {portfolioImages.map((src, index) => (
        <div key={index} className="bg-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
          <img
            src={src}
            alt={`Portfolio item ${index + 1}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default PortfolioGrid;
