import React, { useState } from "react";
import { fetchLearningPath } from "./gemini"; // Import fetchLearningPath

const ProgressPage = () => {
  // Define state for answers and progress
  const [answers, setAnswers] = useState({
    question1: 0,
    question2: 0,
    question3: 0,
    question4: 0,
    question5: 0,
  });

  const [progress, setProgress] = useState(0);
  const [learningPath, setLearningPath] = useState([]);
  const [isProgressVisible, setIsProgressVisible] = useState(false);

  // Learning progress-related questions
  const questions = [
    {
      text: "How many courses have you completed so far?",
      type: "slider",
      max: 10,
    },
    {
      text: "How often do you apply what you've learned in real-world scenarios?",
      type: "dropdown",
      options: ["Never", "Rarely", "Occasionally", "Frequently", "Always"],
    },
    {
      text: "How confident are you in your ability to use the skills you've acquired?",
      type: "slider",
      max: 10,
    },
    {
      text: "How much time do you spend on studying or practicing your new skills each week?",
      type: "slider",
      max: 40, // hours
    },
    {
      text: "How often do you review and reflect on your learning progress?",
      type: "dropdown",
      options: ["Never", "Occasionally", "Frequently", "Always"],
    },
  ];

  // Handle the change in answers
  const handleAnswerChange = (e, questionId) => {
    const value = e.target.value;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: value,
    }));
  };

  // Calculate the progress based on answers
  const calculateProgress = () => {
    let totalScore = 0;
    let totalQuestions = questions.length;

    // Iterate through the answers and calculate a weighted score
    Object.keys(answers).forEach((key, index) => {
      const answer = answers[key];

      if (questions[index].type === "slider") {
        // Assuming slider values range from 0 to the max (e.g., 10 for skill confidence, 40 for hours of study, etc.)
        totalScore += parseInt(answer);
      } else if (questions[index].type === "dropdown") {
        // Map dropdown options to numeric scores
        const dropdownScores = {
          Never: 0,
          Rarely: 1,
          Occasionally: 2,
          Frequently: 3,
          Always: 4,
        };
        totalScore += dropdownScores[answer] || 0;
      }
    });

    // Calculate the progress as a percentage of the total possible score
    const maxScore = totalQuestions * 4 + 10 + 40 + 10; // max score for 4 dropdowns, max 10 for sliders, max 40 for time spent
    const progressPercentage = (totalScore / maxScore) * 100;
    setProgress(progressPercentage);
    setIsProgressVisible(true);

    // Fetch personalized learning path based on progress and answers
    getLearningPath(progressPercentage, answers);
  };

  // Fetch personalized learning path from Gemini API
  const getLearningPath = async (progressPercentage, answers) => {
    try {
      const response = await fetchLearningPath({
        progress: progressPercentage,
        answers: answers,
      });

      // Update the learning path state with the response from Gemini
      setLearningPath(response.learningPath);
    } catch (error) {
      console.error("Error fetching learning path:", error);
    }
  };

  return (
    <div className="progress-page">
      <h1 className="text-center font-bold text-3xl mb-8">
        Track Your Learning Journey
      </h1>

      <div className="questions mb-6">
        {questions.map((question, index) => (
          <div key={index} className="question mb-4">
            <label className="block text-lg font-medium mb-2">
              {question.text}
            </label>

            {question.type === "slider" && (
              <input
                type="range"
                min="0"
                max={question.max}
                value={answers[`question${index + 1}`]}
                onChange={(e) => handleAnswerChange(e, `question${index + 1}`)}
                className="w-full"
              />
            )}

            {question.type === "dropdown" && (
              <select
                value={answers[`question${index + 1}`]}
                onChange={(e) => handleAnswerChange(e, `question${index + 1}`)}
                className="w-full p-2 border rounded"
              >
                {question.options.map((option, idx) => (
                  <option key={idx} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}

            <div className="value-display mt-2 text-center">
              {question.type === "slider" && (
                <span>{answers[`question${index + 1}`]}</span>
              )}
              {question.type === "dropdown" && (
                <span>{answers[`question${index + 1}`]}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <button
        className="mt-6 px-4 py-2 bg-primary text-white rounded"
        onClick={calculateProgress}
      >
        Calculate Your Progress
      </button>

      {isProgressVisible && (
        <div className="progress mt-6">
          <h2 className="text-xl font-semibold">
            Your Progress: {progress.toFixed(2)}%
          </h2>
          <div
            className="progress-bar mt-2"
            style={{
              height: "20px",
              backgroundColor: "#f3f4f6",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <div
              className="progress-filled"
              style={{
                width: `${progress}%`,
                height: "100%",
                backgroundColor: "#4caf50",
              }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgressPage;
