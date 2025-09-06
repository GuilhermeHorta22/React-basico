import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; //biblioteca que vai auxiliar na criação de telas para meu front

//criando uma rota inicial
const router = createBrowserRouter([
  {
    path: "/", //caminho da rota
    element: <App /> //elemento que vai ser chamado quando acessar a rota
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
