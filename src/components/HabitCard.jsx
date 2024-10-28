import React from 'react';
import { Link } from 'react-router-dom';

const HabitCard = ({ habit }) => (
  <div>
    <h3>{habit.name}</h3>
    <Link to={`/habit/${habit.id}`}>View Details</Link>
  </div>
);

export default HabitCard;
