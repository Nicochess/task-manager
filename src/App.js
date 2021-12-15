import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';

function App() {
  const title = 'Task Manager'

  const [tasks, setTasks] = useState([
    {
        id: 0,
        text: "Study React",
        date: "10/10/2021"
    },
    {
        id: 1,
        text: "Call to girlfriend",
        date: "14/12/2021"
    },
    {
        id: 2,
        text: "Play with brother",
        date: "15/12/2021"
    }
])

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header title={title}/>
      <Tasks tasks={tasks} setTasks={setTasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
