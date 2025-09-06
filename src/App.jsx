import { useState} from 'react';
import Tasks from './components/Tasks.jsx';
import AddTasks from './components/AddTasks.jsx';
import { v4 } from 'uuid'; //biblioteca para sortear valores para nosso ID

function App()
{
  const [tasks, setTasks] = useState([{
    id: 1,
    title: 'Estudar programação',
    description: 'Estudar para se tornar um desenvolvedor full stack',
    isCompleted: false
  },
  {
    id: 2,
    title: 'Estudar React',
    description: 'Estudar react para aprimorar meu conhecimento front-end',
    isCompleted: false
  },
  {
    id: 3,
    title: 'Estudar node.js',
    description: 'Estudar node.js para aprimorar meu conhecimento back-end',
    isCompleted: false
  }]);

  //function chamada para alterar os estado do nosso button de task
  function onTaskClick(taskId)
  {
    const newTasks = tasks.map(task => {
      if(task.id === taskId)
      {
        return {...task, isCompleted: !task.isCompleted}
      }
      return task;
    });
    setTasks(newTasks);
  }

  //function para excluir nossa task
  function onDeleteTaskClick(taskId)
  {
    const newTask = tasks.filter((task) => task.id !== taskId)
    setTasks(newTask);
  }

  function onAddTaskSubmit(title, description)
  {
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false
    };
    setTasks([... tasks, newTask]);
  }

  return(
    <div className="w-screen h-screen bg-slate-900 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center" >Gerenciador de tarefas</h1>
        <AddTasks onAddTaskSubmit={onAddTaskSubmit}
        
        />

        <Tasks tasks={tasks} 
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
    
  )
}

export default App;