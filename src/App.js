import TaskList from  './Components/TaskList'
import AddTask from './Components/AddTask'
import Header from './Components/Header'
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <div className='container'>
        <TaskList/>
        <hr className="h-divider"/>
        <AddTask/>
      </div>
    </div>
  );
}

export default App;
