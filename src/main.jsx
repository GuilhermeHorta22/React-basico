import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; //biblioteca que vai auxiliar na criação de telas para meu front
import TaskPages from './pages/TaskPages.jsx';

//criando uma rota inicial
const router = createBrowserRouter([
  {
    path: "/", //caminho da rota
    element: <App /> //elemento que vai ser chamado quando acessar a rota
  },
  {
    path: "/task",
    element: <TaskPages />
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
