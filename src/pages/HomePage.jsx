import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addHabit } from '../features/habits/habitSlice'
import HabitList from '../components/HabitList'

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
    <div>
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
