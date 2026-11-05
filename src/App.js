import { useState } from "react";
import "./App.css";

function TaskCard({ title, description }) {
  const [completed, setCompleted] = useState(false);

  return (
    <div className={`task-card ${completed ? "completed" : ""}`}>
      <h3>{completed ? "Completed!" : title}</h3>
      <p>{description}</p>

      <button onClick={() => setCompleted(!completed)}>
        {completed ? "Undo" : "Complete Task"}
      </button>
    </div>
  );
}

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Learn React",
      description: "Learn components and JSX",
    },
    {
      id: 2,
      title: "Practice Python",
      description: "Learn the great language",
    },
    {
      id: 3,
      title: "Make Music",
      description: "Write or create a song",
    },
  ]);

  const [newTask, setNewTask] = useState("");
  const [newDescription, setNewDescription] = useState("");

  function addTask() {
    if (newTask.trim() === "") return;

    const task = {
      id: Date.now(),
      title: newTask.trim(),
      description: newDescription.trim(),
    };

    setTasks([...tasks, task]);

    setNewTask("");
    setNewDescription("");
  }

  return (
    <div className="app-container">
      <h1>Joviian TaskFlow</h1>
      <p>Your productivity, your universe.</p>
      <p>Manage your daily missions.</p>

      <div className="task-section">
        <h2>My Tasks</h2>

        <div className="task-input">
          <input
            type="text"
            placeholder="Enter task title..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter task description..."
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />

          <button onClick={addTask}>Add Task +</button>
        </div>

        <div className="task-list">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              title={task.title}
              description={task.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
