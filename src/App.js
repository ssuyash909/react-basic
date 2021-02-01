import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState,useEffect } from 'react'

const App =() => {
  const[showAddTask,setShowAddTask]=useState(false);
  const[tasks,setTasks] = useState([])
  useEffect(() => {
    const getTasks = async() =>{
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  },[])

//Fetch tasks
const fetchTasks = async() => {
  const res = await fetch('http://localhost:5000/tasks')
  const data = await res.json()
  console.log(data)
  return data
}  
//Add Task
const addTask = (task) =>{
  const id = Math.floor(Math.random() * 10000)+1;
  const newTask ={id , ...task};
  let newTasks = [...tasks,newTask] 
  setTasks(newTasks)
}

//Delete Task
const deleteTask= (id) => {
  setTasks(tasks.filter((task)=> task.id !== id));
}

//Toggle reminder
const toggleReminder= (id) => {
  setTasks(tasks.map((task)=>{
    if(task.id === id){
      task.reminder = !task.reminder;
    }
    return task;
  }));
}

return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask) } showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length>0 
      ?(<Tasks tasks={tasks} onDelete={deleteTask} 
      onToggle={toggleReminder} />):('No Tasks to show')}
    </div>

    
  )
}
/*class Component
class App extends React.Component{
  render(){
    return <h1> Task Trackers</h1>;
  }
}*/

export default App;
