import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addScore } from '../store/scoreSlice';
import './ScorePopup.css';

const ScorePopup = () => {
  const [username, setUsername] = useState('');
  const [time, setTime] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const [minutes, seconds, milliseconds] = time.split(':').map(Number);
    const totalMilliseconds = (minutes * 60 + seconds) * 1000 + milliseconds;
    dispatch(addScore({ username, time: totalMilliseconds }));
    setUsername('');
    setTime('');
  };

  return (
    <div className="score-popup">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="MM:SS:MMM"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          pattern="\d{2}:\d{2}:\d{3}"
        />
        <button type="submit">Add Score</button>
      </form>
    </div>
  );
};

export default ScorePopup;
