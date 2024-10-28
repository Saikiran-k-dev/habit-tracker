import { createSlice } from "@reduxjs/toolkit";

const initialState=[]

const habitSlice = createSlice({
    name:'habit',
    initialState,
    reducers:{
        addHabit:(state,action)=>{
            state.push({
                id:Date.now(),
                name:action.payload,
                status:Array(7).fill('None')

            })

       
    },
        toggleStatus:(state,action)=>{
            const {id,dayIndex,status} = action.payload
            const habit = state.find(habit=>habit.id===id)
            if(habit) habit.status[dayIndex] = status
        }
        
    }
})

export const {addHabit,toggleStatus} = habitSlice.actions
export default habitSlice.reducer