import { BrowserRouter as Router, Link, Routes, Route, useNavigate } from 'react-router-dom';
import Survey from "./survey/survey";
import { useState } from "react";
import './App.css';

function Home() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [roomCode, setRoomCode] = useState("");
  const [error, setError] = useState("");


  const handleClick= () => {
    if (!name.trim() || !roomCode.trim()) {
      setError("⚠️ Name and room code are required.");
      return;
    }

    setError("");
    console.log("Logging in with:", name, roomCode);

      navigate("/survey", {state: {name, roomCode}});
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleClick();
    }
  };

  return(
    <div className="login-container">
        <h1>Welcome!</h1>
        <p>Enter your name:</p>
        <input 
          type="text"
          value={name} 
          onChange={(e) => setName(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="ex: Katie Smith"
          required
          />
        <p>Enter a room code:</p>
        <input 
          type="text" 
          value={roomCode}
          onChange={(e) => setRoomCode(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="ex: 675435"
          required
        />
        <div className="button-group">
            <button onClick={handleClick} disabled={!name.trim() || !roomCode.trim()}>Login</button>
            
        </div>
    </div>
  );
}


export default function App() {

  return (
    
    <Router>
      <header>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey" element={<Survey />} />
      </Routes>
    </Router>
    
  );
};

