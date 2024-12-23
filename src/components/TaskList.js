import React from 'react';

const TaskList = ({ tasks, toggleTaskStatus }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <p>{task.name}</p>
          <p>{task.status}</p>
          <button onClick={() => toggleTaskStatus(task.id)}>Toggle Status</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
