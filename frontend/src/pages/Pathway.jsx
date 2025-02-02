// src/LearningPathRecommendationPage.js
import React, { useState } from "react";
import { fetchLearningPath } from "./gemini"; // Import the fetchLearningPath function

const Pathway = () => {
  const [userInput, setUserInput] = useState("");
  const [learningPath, setLearningPath] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userInput.trim()) {
      setError("Please provide a detailed description of your learning goals.");
      return;
    }

    setLoading(true);
    setError("");
    setLearningPath([]);

    // Call the function to get learning path from Gemini
    const path = await fetchLearningPath(userInput);
    setLearningPath(path.split("\n"));
    setLoading(false);
  };

  return (
    <div className="learning-path-page p-6">
      <h1 className="text-center font-bold text-3xl mb-8">
        Learning Path Recommendation
      </h1>
      <p className="text-center text-lg mb-4">
        Describe your background, goals, and preferences, and we'll recommend a
        learning path for you!
      </p>
      <form onSubmit={handleSubmit} className="mx-auto w-2/3">
        <textarea
          className="p-4 w-full border rounded"
          rows="8"
          placeholder="Tell us about your learning goals and background..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        {error && <p className="text-red-600 mt-2">{error}</p>}
        <button
          type="submit"
          className="mt-4 p-2 w-full bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Get Learning Path
        </button>
      </form>

      {loading && <p className="text-center mt-4 text-lg">Loading...</p>}

      {learningPath.length > 0 && !loading && (
        <div className="learning-path-results mt-6">
          <h2 className="text-xl font-semibold mb-4">
            Recommended Learning Path:
          </h2>
          <ul className="pl-5">
            {learningPath.map((step, index) => (
              <li key={index} className="text-lg mb-2">
                {step}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Pathway;
