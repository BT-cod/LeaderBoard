import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatTime } from '../utils/formatTime';
import { sortScores, addScore } from '../store/scoreSlice';
import './Leaderboard.css';

const Leaderboard = () => {
  const dispatch = useDispatch();
  const scores = useSelector(state => state.scores.scores);
  const [animatedScores, setAnimatedScores] = useState([]);
  const [animationStep, setAnimationStep] = useState(false);

  useEffect(() => {
    setAnimatedScores(scores);
  }, [scores]);

  useEffect(() => {
    if (animationStep) {
      const timer = setTimeout(() => {
        dispatch(sortScores());
        setAnimatedScores(scores);
        setAnimationStep(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [animationStep, dispatch, scores]);

  const getClassName = (index) => {
    switch(index) {
      case 0:
        return 'gold';
      case 1:
        return 'silver';
      case 2:
        return 'bronze';
      default:
        return '';
    }
  };

  const handleAddScore = (username, time) => {
    const [minutes, seconds, milliseconds] = time.split(':').map(Number);
    const totalMilliseconds = (minutes * 60000) + (seconds * 1000) + milliseconds;
    dispatch(addScore({ username, time: totalMilliseconds }));
    setAnimationStep(true);
  };

  return (
    <div className="leaderboard">
      <h2>Top 10 Scores</h2>
      <ul>
        {animatedScores.map((score, index) => (
          <li key={index} className={`${getClassName(index)} animate`}>
            <span>{score.username}</span>
            <span>{formatTime(score.time)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
