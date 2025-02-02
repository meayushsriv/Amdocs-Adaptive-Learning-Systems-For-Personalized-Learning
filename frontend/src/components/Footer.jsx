import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/*left section*/}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            CareerSync is dedicated to transforming professional development by
            utilizing cutting-edge technology and data-driven insights. Our
            mission is to provide personalized learning experiences through
            AI-powered recommendations, tailored courses, and adaptive feedback.
            By partnering with industry leaders and educational institutions, we
            strive to empower individuals to achieve their career goals and
            unlock new opportunities for growth.
          </p>
        </div>
        {/*center section*/}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>Our Mission</li>
            <li>Features</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/*right section*/}
        <div>
          <p className="text-xl font-medium mb-5">CONTACT US</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91 9876543210</li>
            <li>support@careersync.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          © 2024 CareerSync | All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
