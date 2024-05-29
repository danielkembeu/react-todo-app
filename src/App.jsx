import React from 'react';
import toast from 'react-hot-toast';
import { IoIosNotifications } from 'react-icons/io';

// Composants
import Input from './components/input/Input';
import TasksContainer from './components/tasks/tasks';


export default function App() {

  const [nouvelleTache, setNouvelleTache] = React.useState('');

  const creerNouvelleTache = (tache) => {

  }

  // Notification.
  const notify = (message) => toast(message, {
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
        <Input value={nouvelleTache} setValue={setNouvelleTache} />
      </div>

      <div style={{ width: '100vw' }}>
        <TasksContainer />
      </div>
    </div>
  );
}