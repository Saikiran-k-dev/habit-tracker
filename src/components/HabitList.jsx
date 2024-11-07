import React from 'react';
import { useSelector } from 'react-redux';
import HabitCard from './HabitCard';


const HabitList = () => {
  const habits = useSelector((state) => state.habits);
  console.log(habits)

  return (
    <div>
      {habits.length > 0 ? (
        habits.map((habit) => <HabitCard key={habit.id} habit={habit} />)
      ) : (
        <p>No habits added yet.</p>
      )}
    </div>
  );
};

export default HabitList;
