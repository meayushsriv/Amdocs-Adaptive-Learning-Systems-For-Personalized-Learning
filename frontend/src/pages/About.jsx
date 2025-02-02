import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          <span className="text-gray-700 font-medium">ABOUT </span>US
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Welcome to CareerSync. We are dedicated to transforming professional
            development by offering personalized learning experiences to help
            you achieve your career goals. At CareerSync, we understand the
            challenges individuals face when it comes to choosing the right
            courses, certifications, and resources to grow professionally.
          </p>
          <p>
            CareerSync is committed to leveraging AI-powered recommendations and
            adaptive learning. We continuously refine our platform to integrate
            the latest advancements, ensuring that every user receives the most
            relevant and impactful resources to enhance their skills, career
            prospects, and overall professional growth.
          </p>
          <p className="text-gray-900 text-lg">Our Vision</p>
          <p>
            Our vision at CareerSync is to make learning accessible, efficient,
            and aligned with real-world career opportunities. We aim to bridge
            the gap between educational resources and career needs, ensuring
            that every learner has access to personalized, adaptive learning
            experiences that accelerate their career success.
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US?</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-30 text-gray-600 cursor-pointer">
          <b>Efficiency:</b>
          <p>
            Tailored learning paths and recommendations that optimize your
            professional development.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-30 text-gray-600 cursor-pointer">
          <b>Convenience:</b>
          <p>
            Access to a wide range of educational resources, courses, and
            certifications from trusted providers.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-30 text-gray-600 cursor-pointer">
          <b>Personalization:</b>
          <p>
            AI-driven recommendations and adaptive feedback to help you stay on
            track with your career goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
