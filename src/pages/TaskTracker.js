import React, { useState } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

const TaskTracker = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: tasks.length + 1, ...task }]);
  };

  const toggleTaskStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: task.status === 'Pending' ? 'Completed' : 'Pending' } : task
      )
    );
  };

  return (
    <div>
      <h1>Task Tracker</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} toggleTaskStatus={toggleTaskStatus} />
    </div>
  );
};

export default TaskTracker;
