import {useState,useRef } from "react"
import { useSelector,useDispatch } from "react-redux";
import { addTask,selectTasks } from "../features/tasks/tasksSlice";
const AddTask = () => {
  const textRef=  useRef();
  const timeRef = useRef();
  const [textValidation,setTextValidation]=useState("");
  const [timeValidation,setTimeValidation]=useState("");
  
  const tasks = useSelector(selectTasks)
  const dispatch = useDispatch();
  function onSubmit(e){
    e.preventDefault();
    const text = textRef.current.value;
    const  time =timeRef.current.value;
    let valid=true;
    if(text===""){
      valid=false;
      setTextValidation("Please enter a task");
    }
    if(time===""){
      valid=false;
      setTimeValidation("Please enter the time");
    }
    if(!valid)return;
    setTextValidation("");
    setTimeValidation("");
    tasks.forEach(t=>{
      if(t.text===text&&t.time===time){
        setTimeValidation("This task already exist!");
        valid=false;
      }
    });
    if(!valid)return ;
    const task={id:Math.floor(Math.random()*1000000),
                text:text,
                time:time
                
                };
  timeRef.current.value='';
  textRef.current.value='';              
        
   dispatch(addTask(task));
  }
  return (
    <>
    <h2>Add Task</h2>
    <div className="form-center">
      <form onSubmit={onSubmit}>
        
        <label htmlFor="text">Task</label>
        <input className="input-control" ref={textRef}   type="text" maxLength={40} />
        <span className="validation">{textValidation}</span>
        <label htmlFor="date">Time</label>
        <input  className="input-control" ref={timeRef} type="time"/>
        <span className="validation">{timeValidation}</span>
        <button className="btn">Add Task</button>


      </form>
    </div>
    </>
  )
}

export default AddTask
