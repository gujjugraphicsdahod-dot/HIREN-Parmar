
import React from 'react';
import InstagramIcon from './icons/InstagramIcon';
import WhatsappIcon from './icons/WhatsappIcon';

const ContactBar: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-[#E58A4A] to-[#D9684A] text-white font-semibold py-4 px-6 rounded-2xl shadow-md">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-lg">
        <div className="flex items-center gap-3">
          <InstagramIcon />
          <span>@gujjugraphics</span>
        </div>
        <div className="flex items-center gap-3">
          <WhatsappIcon />
          <span>+91-8141806048 / 6353989542</span>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
