
import React from 'react';
import CheckIcon from './icons/CheckIcon';

const Hero: React.FC = () => {
  return (
    <section className="relative mt-12 md:mt-0">
      <div className="absolute -top-20 right-0 hidden md:block" style={{ zIndex: 1 }}>
        <img 
          src="https://i.imgur.com/8Q5QYhm.png"
          alt="Graphic Designer"
          className="w-auto h-[450px]"
        />
      </div>
      
      <div className="bg-[#2C2F1E] text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
        <div className="md:w-2/3 relative" style={{ zIndex: 2 }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Welcome to my design portfolio!</h2>
          <p className="text-gray-300 mb-8">
            I specialize in crafting eye-catching and effective social media creatives tailored for businesses, influencers, and content creators. From bold branding posts to elegant festival creatives — I help you stand out online and connect with your audience.
          </p>
          <button className="bg-gradient-to-r from-[#E58A4A] to-[#D9684A] text-white font-bold py-3 px-8 rounded-xl text-lg hover:opacity-90 transition-opacity mb-10 shadow-lg">
            Service Overview
          </button>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-4 text-lg">
            <div className="flex items-center gap-2">
              <CheckIcon />
              <span>Social Media Post</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon />
              <span>Banner Ads</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon />
              <span>Flyers Design</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon />
              <span>Posters Design</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon />
              <span>YouTube thumbnail</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon />
              <span>Infographic Design</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
