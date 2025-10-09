// src/components/LoginForm.jsx
import React, { useState } from 'react';
import './login.css';

const LoginForm = () => {
  const [name, setName] = useState('');
  const [roomCode, setRoomCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Room Code:', roomCode);
    window.location.href = '/survey/survey.html';
  };

  return (
    <main>
      <h1>Please enter your room code!</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter room code"
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value)}
          />
        </div>
        <div className="button-container">
          <button type="submit">Submit</button>
        </div>
      </form>
    </main>
  );
};

export default LoginForm;
