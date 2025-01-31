import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { auth, db } from "./firebaseConfig"; // Firebase config setup
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Roadmap from "./pages/Roadmap";
import Chatbot from "./pages/Chatbot";
import Community from "./pages/Community";
import Progress from "./pages/Progress";

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const userDoc = doc(db, "users", result.user.uid);
      const userSnap = await getDoc(userDoc);

      if (!userSnap.exists()) {
        await setDoc(userDoc, { email: result.user.email, interests: [] });
      }
      setUser(result.user);
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home onLogin={handleLogin} />} />
        <Route
          path="/dashboard"
          element={user ? <Dashboard user={user} /> : <Navigate to="/" />}
        />
        <Route
          path="/roadmap"
          element={user ? <Roadmap user={user} /> : <Navigate to="/" />}
        />
        <Route
          path="/chatbot"
          element={user ? <Chatbot user={user} /> : <Navigate to="/" />}
        />
        <Route
          path="/community"
          element={user ? <Community user={user} /> : <Navigate to="/" />}
        />
        <Route
          path="/progress"
          element={user ? <Progress user={user} /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
