import React from 'react';
import toast from 'react-hot-toast';
import { IoIosNotifications } from 'react-icons/io';

// Composants
import Input from './components/input/Input';
import TasksContainer from './components/tasks/tasks';

export default function App() {

  const notify = () => toast('Bonjour Cynthia Rosssss.', {
    position: 'bottom-center',
    icon: <IoIosNotifications />,
    duration: 2000
  });

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <h1>Todo App</h1>
      <div style={{ widht: '100%' }}>
        <Input />
      </div>

      <div style={{ width: '100vw' }}>
        <TasksContainer />
      </div>
    </div>
  );
}