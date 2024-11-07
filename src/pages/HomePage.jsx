import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addHabit } from '../features/habits/habitSlice'
import HabitList from '../components/HabitList'
import styles from '../css/homePage.module.css'

const HomePage = () =>  {
    const [habitName,setHabitName] = useState('')
    const dispatch = useDispatch()

    const handleAddHabit = ()=>{
        if(habitName){
            dispatch(addHabit(habitName))
            setHabitName('')
        }
    }


  return (
    <div className={styles.container}>
      <h2>Habit Tracker</h2>
      <input 
      type="text"
      value={habitName}
      onChange={(e)=>setHabitName(e.target.value)}
      />
      <button onClick={handleAddHabit}>Add habit</button>
      <HabitList />
    </div>
    
  )
}

export default HomePage
