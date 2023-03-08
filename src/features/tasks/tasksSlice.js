import {  createSlice } from '@reduxjs/toolkit';


const initialState={
    tasks:[],
};

export const taskManagerSlice = createSlice({
    name:'tasks',
    initialState,
    reducers:{
        addTask:(state,action)=>{
            state= {...state,tasks:[action.payload,...state.tasks]};
            state.tasks.sort((t1,t2)=>{
                const date1 = new Date('2020-01-01 ' + t1.time);
                const date2 = new Date('2020-01-01 ' + t2.time);
                
                return date1-date2});
            return state;    
        }
        ,
        deleteTask: (state,action)=>{
            state.tasks= state.tasks.filter(task=>task.id!==action.payload)
            return state;
        }
        
}
})

export const {addTask,deleteTask } = taskManagerSlice.actions;

export const selectTasks = (state) => state.tasksReducer.tasks;

export default taskManagerSlice.reducer;