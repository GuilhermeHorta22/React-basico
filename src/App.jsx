//import { useState} from 'react';
import Tasks from './components/Tasks.jsx';
import AddTasks from './components/AddTasks.jsx';

function App()
{
  return(
    <div>
      <h1>Gerenciador de tarefas</h1>
      <Tasks></Tasks>
      <AddTasks></AddTasks>
    </div>
    
  )
}

export default App;