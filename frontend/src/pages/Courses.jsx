import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
];

const Courses = () => {
  const navigate = useNavigate();
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((course) => course.category === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div>
      <p className="text-gray-600">Browse through the available courses.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button
          className={`py-1 px-3 rounded text-sm transition-all sm:hidden ${
            showFilter ? "bg-primary text-white" : ""
          }`}
          onClick={() => {
            setShowFilter(!showFilter);
          }}
        >
          Filter
        </button>
        <div
          className={`flex flex-col gap-4 text-sm text-gray-600 ${
            showFilter ? "flex" : "hidden sm:flex"
          }`}
        >
          <p
            onClick={() => {
              speciality === ""
                ? navigate("/doctors")
                : navigate("/doctors/Programming");
            }}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Programming" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Programming
          </p>
          <p
            onClick={() => {
              speciality === ""
                ? navigate("/doctors")
                : navigate("/doctors/Design");
            }}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Design" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Design
          </p>
          <p
            onClick={() => {
              speciality === ""
                ? navigate("/doctors")
                : navigate("/doctors/Data Science");
            }}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Data Science" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Data Science
          </p>
          <p
            onClick={() => {
              speciality === ""
                ? navigate("/doctors")
                : navigate("/doctors/Marketing");
            }}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Marketing" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Marketing
          </p>
          <p
            onClick={() => {
              speciality === ""
                ? navigate("/doctors")
                : navigate("/doctors/Business");
            }}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Business" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Business
          </p>
          <p
            onClick={() => {
              speciality === ""
                ? navigate("/doctors")
                : navigate("/doctors/Finance");
            }}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Finance" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Finance
          </p>
        </div>
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {courseList.map((item, index) => {
            return (
              <div
                onClick={() => {
                  navigate(`/appointment/${item._id}`);
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
                        item.available ? "bg-green-500" : "bg-gray-500"
                      }`}
                    ></p>
                    <p>{item.available ? "Available" : "Not Available"}</p>
                  </div>
                  <p className="text-gray-900 text-lg font-medium">
                    {item.name}
                  </p>
                  <p className="text-gray-600 text-sm">{item.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Courses;
