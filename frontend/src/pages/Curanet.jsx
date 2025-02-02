import React, { useState } from "react";
import { fetchLearningPath } from "./gemini"; // Import the fetchLearningPath function

const Curanet = () => {
  const [selectedJobProfile, setSelectedJobProfile] = useState("");
  const [recommendedCourses, setRecommendedCourses] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Sample job profiles
  const jobProfiles = [
    { id: 1, title: "Software Engineer" },
    { id: 2, title: "Data Scientist" },
    { id: 3, title: "UI/UX Designer" },
    { id: 4, title: "Product Manager" },
    { id: 5, title: "Digital Marketer" },
  ];

  // Handle selection of job profile
  const handleJobProfileChange = (e) => {
    setSelectedJobProfile(e.target.value);
    setRecommendedCourses([]);
  };

  // Handle user input change (e.g., background, goals, etc.)
  const handleUserInputChange = (e) => {
    setUserInput(e.target.value);
  };

  // Handle form submission and call Gemini API
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedJobProfile || !userInput.trim()) {
      setError("Please select a job profile and provide additional details.");
      return;
    }

    setLoading(true);
    setError("");
    setRecommendedCourses([]);

    try {
      // Construct the user input and call Gemini API for recommendations
      const path = await fetchLearningPath(
        `Job profile: ${selectedJobProfile}, User details: ${userInput}`
      );
      setRecommendedCourses(path.split("\n"));
    } catch (err) {
      setError("Failed to fetch recommendations from Gemini.");
    }
    setLoading(false);
  };

  return (
    <div className="recommendation-page p-6">
      <h1 className="text-center font-bold text-3xl mb-8">
        Course Recommendations Based on Your Job Profile
      </h1>

      {/* Job Profile Selection */}
      <div className="job-profile-selection">
        <label htmlFor="job-profile" className="block text-lg font-medium mb-4">
          Select Your Job Profile:
        </label>
        <select
          id="job-profile"
          className="p-2 w-full border rounded"
          value={selectedJobProfile}
          onChange={handleJobProfileChange}
        >
          <option value="">Select a Job Profile</option>
          {jobProfiles.map((profile) => (
            <option key={profile.id} value={profile.title}>
              {profile.title}
            </option>
          ))}
        </select>
      </div>

      {/* User Input for Customization */}
      <div className="user-input mt-6">
        <label htmlFor="user-input" className="block text-lg font-medium mb-4">
          Describe your background and learning goals:
        </label>
        <textarea
          id="user-input"
          className="p-4 w-full border rounded"
          rows="4"
          placeholder="e.g., I have a background in web development and want to learn more about machine learning."
          value={userInput}
          onChange={handleUserInputChange}
        />
      </div>

      {/* Error message */}
      {error && <p className="text-red-600 mt-4">{error}</p>}

      {/* Submit Button */}
      <div className="submit-button mt-6 text-center">
        <button
          className="p-3 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={handleSubmit}
        >
          Get Course Recommendations
        </button>
      </div>

      {/* Loading state */}
      {loading && <p className="text-center mt-4 text-lg">Loading...</p>}

      {/* Recommended Courses */}
      {recommendedCourses.length > 0 && !loading && (
        <div className="recommended-courses mt-6">
          <h2 className="text-xl font-semibold mb-4">
            Recommended Courses for {selectedJobProfile}:
          </h2>
          <ul className="pl-5">
            {recommendedCourses.map((course, index) => (
              <li key={index} className="text-lg">
                {course}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* No recommendations message */}
      {recommendedCourses.length === 0 && selectedJobProfile && !loading && (
        <p className="mt-6 text-lg text-gray-500">
          Please select a job profile and provide additional details to get
          personalized course recommendations.
        </p>
      )}
    </div>
  );
};

export default Curanet;
