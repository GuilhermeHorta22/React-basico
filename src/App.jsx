import { useEffect, useState} from 'react';
import Tasks from './components/Tasks.jsx';
import AddTasks from './components/AddTasks.jsx';
import { v4 } from 'uuid'; //biblioteca para sortear valores para nosso ID

function App()
{
  //adicionando e mantendo os dados antigos na nossa lista
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  //pegando os dados que foi preenchido e deixando armazenados para nao se perder quando atualizar
  useEffect(() => { 
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const fetchTask = async () => { //chamando a nossa API
      const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10",
        {
          method: "GET",
        }
      );
      const data = await response.json();  //pegando os dados que ela retorna
      setTasks(data); //armazenando / persistindo os dados que foi retornado
    }
    //fetchTask(); //se voce quiser chamar uma API 
  }, []);

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

  //function para adicionar uma nova task, sendo passado o title e description que veio atraves de input
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