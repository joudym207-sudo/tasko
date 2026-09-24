import { useState } from 'react';
import './App.css'
import TaskCard from './components/TaskCard'
const tasksList = [
  { id: 1, title: 'Solve Calculus exercises page 42', subject: 'Math 📐' },
  { id: 2, title: 'Practice React Props & useState flow', subject: 'Dev 💻' },
  { id: 3, title: 'Memorize Unit 2 vocabulary set', subject: 'English 🇬🇧' },
  { id: 4, title: 'Read Atmospheric Pressure experiment', subject: 'Physics 🧪' }
];
function App() {
  const [taskTitle, setTaskTitle] = useState('');
  const [tasks, setTasks] = useState([]);

    function handleAddTask(e) {
      e.preventDefault();

      if(!taskTitle.trim()) return;  

      const newTasks = {
        id: Date.now(),
        title: taskTitle,
        subject: "general",
      };
  
      setTasks([...tasks, newTasks]);
      setTaskTitle("");
    }

  return (
    <div className='container'>
      <header>
        <div>
          <h1> Welcome to my project "tasko"</h1>
          <p>Here you can organize your tasks</p>
        </div>
      </header>
      <main>
        {/* <TaskCard title="math math math math" subject="hello" /> */}
      </main>
      <form className='task-form' onSubmit={(e) => handleAddTask(e)}>
        <input value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} className='text' type="text" />
        <button type='submit' className='btn' >Add</button>
      </form>

      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          title={task.title}
          subject={task.subject}
        />
      ))}
    </div>
  )
}
export default App;