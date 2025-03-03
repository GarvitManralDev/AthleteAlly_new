import React from "react";

function Footer() {
  return (
    <div className="h-82 bg-[#3B4651] mt-12 text-white">
      <div className="flex h-48">
        <div className=" w-[65%] p-15 pl-35">
          <div className="text-4xl font-bold">AthleteAlly</div>
          <div className="text-xl mt-2 font-semibold">
            Empowering Athletes Worldwide
          </div>
        </div>
        <div className=" w-[35%] p-15 pl-20 text-xl font-semibold">
          <div>Privacy Policy</div>
          <div className="mt-2">Terms of Services</div>
          <div className="mt-2">Contact Us</div>
        </div>
      </div>
      <div className="text-center font-semibold text-lg mt-20">
        @2024 AthleteAlly.All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
