import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  const title = "Task Manager";

  const [show, setShow] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 0,
      text: "Study React",
      date: "10/10/2021",
      reminder: false,
    },
    {
      id: 1,
      text: "Call to girlfriend",
      date: "14/12/2021",
      reminder: false,
    },
    {
      id: 2,
      text: "Play with brother",
      date: "15/12/2021",
      reminder: false,
    },
  ]);

  // Delete Tasks
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle the reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  //Handle the task data
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000);
    const newTask = { id, ...task };

    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      <Header
        title={title}
        onToggle={() => setShow(!show)}
        buttonName={show ? "Close" : "Open"}
        color={show ? 'red' : 'green'}
      />
      {show && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "There's no tasks yet"
      )}
    </div>
  );
}

export default App;
