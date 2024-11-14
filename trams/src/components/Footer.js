import React from "react";
import logo from '../assets/TramsLogo.svg';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa6";
import { HiLocationMarker, HiMail } from "react-icons/hi";
import { SlSocialYoutube } from "react-icons/sl";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-white h-[317.52px]">
      <div className="flex  justify-between pt-[50px] px-[120px]">
        <div>
          <img src={logo} alt="Logo" className="h-[50px] mb-2" />
          <div className="flex flex-col gap-[5px]">
            <div className="flex items-center gap-2">
              <FaPhone className="text-[20px]" />
              <p className="text-[16px]">+2348104202375</p>
            </div>
            <div className="flex items-center gap-2">
              <HiMail className="text-[20px]" />
              <p className="text-[16px]">tramsafrica24@gmail.com</p>
            </div>
            <div className="flex items-center gap-2">
              <HiLocationMarker className="text-[20px]" />
              <p className="text-[16px]">
                25 Alhaji Bak're Berger, Lagos, Nigeria.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-[20px]">Terms & Policies</h3>
          <div className="flex flex-col gap-[5px]">
            <p>Terms of use</p>
            <p>Privacy Policy</p>
          </div>
        </div>
        <div className="flex flex-col gap-[10px]">
          <h3 className="text-[20px]">Navigations</h3>
          <div className="flex flex-col gap-[5px]">
            <p>Home</p>
            <p>News</p>
            <p>How to Use</p>
            <p>About us</p>
          </div>
        </div>
        <div className="flex flex-col gap-[10px]">
          <h3 className="text-[20px]">Socials</h3>
          <div className="grid grid-cols-2 gap-2">
          <a href="https://www.linkedin.com/company/tramsafrica/?viewAsMember=true">
    <div className="h-[24px] w-[24px] rounded-full bg-[#186318] items-center flex justify-center p-[6px]">
        <FaInstagram />
    </div>
</a>
<a href="https://www.linkedin.com/company/tramsafrica/?viewAsMember=true">
    <div className="h-[24px] w-[24px] rounded-full bg-[#186318] items-center flex justify-center p-[6px]">
        <FaTwitter />
    </div>
</a>
<a href="https://www.linkedin.com/company/tramsafrica/?viewAsMember=true">
    <div className="h-[24px] w-[24px] rounded-full bg-[#186318] items-center flex justify-center p-[6px]">
        <FaLinkedin />
    </div>
</a>
<a href="https://www.youtube.com/[your_youtube_channel_name]">
    <div className="h-[24px] w-[24px] rounded-full bg-[#186318] items-center flex justify-center p-[6px]">
        <SlSocialYoutube />
    </div>
</a>
          </div>
        </div>
      </div>
      <div className="flex justify-center h-[80px] gap-[100px] mt-[20px] items-center">
        <div className="flex items-center gap-[5px]">
          {" "}
          <FaRegCopyright />{" "}
          <img src={logo} alt="Logo" className="h-[50px]" />
        </div>
        <div className="flex gap-[100px]">
            <p>Reference</p>
            <p>Disclaimer</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;