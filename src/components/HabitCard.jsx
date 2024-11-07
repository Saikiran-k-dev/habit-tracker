import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/homePage.module.css'

const HabitCard = ({ habit }) => (
  <div>
    <h3 className={styles.habitListItem}>{habit.name}</h3>
    <button><Link to={`/habit/${habit.id}`}>View Details</Link></button>
  </div>
);

export default HabitCard;
