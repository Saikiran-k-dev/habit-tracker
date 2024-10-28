import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { toggleStatus } from '../features/habits/habitSlice'

const statuses = ['Done', 'Not Done', 'None'];


const HabitDetailPage = () => {
    const {id} = useParams();
    const habit = useSelector((state)=>state.habits.find((h)=>h.id === parseInt(id)))
    console.log(habit)
    const dispatch = useDispatch();

    const handleStatusToggle = (dayIndex) => {
        const newStatus = statuses[(statuses.indexOf(habit.status[dayIndex])+1)%statuses.length]
        dispatch(toggleStatus({id:habit.id,dayIndex,status:newStatus}))
    }

    if(!habit) return <p>Habit not found</p>

    return (
    <div>
      <h2>{habit.name}</h2>
      <div>
        {habit.status.map((status,idx)=>(
            <button key={idx} onClick={()=>handleStatusToggle(idx)}>{status} (Day{idx+1})</button>
        ))}
      </div>
    </div>

  )
}

export default HabitDetailPage
