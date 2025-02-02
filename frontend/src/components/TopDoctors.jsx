import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const courseList = [
  {
    name: "Programming",
    image: "https://img-c.udemycdn.com/course/304x171/433798_1de9_4.jpg",
  },
  {
    name: "Design",
    image: "https://img-c.udemycdn.com/course/240x135/24823_963e_14.jpg",
  },
  {
    name: "Data Science",
    image: "https://img-c.udemycdn.com/course/304x171/500632_e820.jpg",
  },
  {
    name: "Marketing",
    image: "https://img-c.udemycdn.com/course/240x135/709624_3315_5.jpg",
  },
  {
    name: "Business",
    image: "https://img-c.udemycdn.com/course/240x135/4157784_e5ac_2.jpg",
  },
  {
    name: "Finance",
    image: "https://img-c.udemycdn.com/course/304x171/2054207_7e93_2.jpg",
  },
  {
    name: "Programming",
    image: "https://img-c.udemycdn.com/course/304x171/433798_1de9_4.jpg",
  },
  {
    name: "Design",
    image: "https://img-c.udemycdn.com/course/240x135/24823_963e_14.jpg",
  },
  {
    name: "Data Science",
    image: "https://img-c.udemycdn.com/course/304x171/500632_e820.jpg",
  },
  {
    name: "Marketing",
    image: "https://img-c.udemycdn.com/course/240x135/709624_3315_5.jpg",
  },
  {
    name: "Business",
    image: "https://img-c.udemycdn.com/course/240x135/4157784_e5ac_2.jpg",
  },
  {
    name: "Finance",
    image: "https://img-c.udemycdn.com/course/304x171/2054207_7e93_2.jpg",
  },
];

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Top Courses to Explore</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Discover AI-driven personalized course recommendations tailored to your
        learning goals.
      </p>
      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {courseList.slice(0, 10).map((item, index) => {
          return (
            <div
              onClick={() => {
                navigate(`/course/${item.name}`);
                scrollTo(0, 0);
              }}
              key={index}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            >
              <img className="bg-blue-50" src={item.image} alt="" />
              <div className="p-4">
                <div
                  className={`flex items-center gap-2 text-sm text-center ${
                    item.available ? " text-green-500" : "text-gray-500"
                  }`}
                >
                  <p
                    className={`w-2 h-2 rounded-full ${
                      item.name ? "bg-green-500" : "bg-gray-500"
                    }`}
                  ></p>
                  <p>{item.name ? "Available" : "Not Available"}</p>
                </div>
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.name}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          navigate("/courses");
          scrollTo(0, 0);
        }}
        className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10"
      >
        More
      </button>
    </div>
  );
};

export default TopDoctors;
