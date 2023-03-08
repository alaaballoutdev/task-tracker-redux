import Task from './Task'
import {useSelector} from 'react-redux';
import { selectTasks } from '../features/tasks/tasksSlice';
const TaskList = () => {
 const tasks =  useSelector(selectTasks)

  
 
  return (
    <div>
      <h2>My Tasks</h2>
      <p>{tasks.length===0?"Here we go, there is no new tasks for today!!":""}</p>
      
        {tasks.map(task=> <Task Task={task} key={task.id}/>)}
        
        
    
    </div>
  )
}

export default TaskList
