import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'

const App =() => {
  const[tasks,setTasks] = useState([
    {
        id:1,
        text: 'Doctors Appointment',
        day:'Feb 5th at 2:00 pm',
        reminder:true,

    },
    {
        id:2,
        text: 'Pet shop',
        day:'Feb 8th at 10:00am',
        reminder:false,

    },
    {
        id:3,
        text: 'Cycling',
        day:'Feb 9th at 11:00am',
        reminder:true,

    }

])
//Add Task
const addTask = (task) =>{
  console.log(task);

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
      <Header/>
      <AddTask onAdd={addTask} />
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
