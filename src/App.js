import Header from './components/Header'
import Tasks from './components/Tasks'
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

    }

])

//Delete Task
const deleteTask= (id) => {
  console.log('delete',id);
}
  return (
    <div className="container">
      <Header/>
      <Tasks tasks={tasks} onDelete={deleteTask}/>
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
