import { deleteTask } from "../features/tasks/tasksSlice";
import {motion,useAnimation } from "framer-motion";
import { useDispatch } from "react-redux";


const Task = ({Task}) => {
  const dispatch = useDispatch();  
  const controls = useAnimation()
  async function handleDragEnd(event, info) {
    const offset = info.offset.x
    const velocity = info.velocity.x
  
    if (offset > 10 || velocity > 500) {
        await controls.start({ x: "100%", transition: { duration: 0.6 } ,opacity:0})
       dispatch( deleteTask(Task.id))
    } else {
        controls.start({ x:0, opacity: 1, transition: { duration: 0.2 } })
    }
  }
  
  
  return (
    <motion.div 
      drag="x"
      onDragEnd={handleDragEnd}
      animate={controls}
      whileHover={{scale:1.2}}
      className='task-item right-decoration'>
        
            
            <div className="text-wrapper">
                <p className="text">{Task.text}</p>
                <p className="date">{Task.time}</p>
                <button className="delete-btn" onClick={()=>dispatch(deleteTask(Task.id))}>x</button>   
        
             </div>
            
  
    </motion.div>
  )
}

export default Task
