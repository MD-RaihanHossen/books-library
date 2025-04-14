import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//it come from react routers dom
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './Components/Error/Error.jsx';
import Home from './Components/Home/Home.jsx';
import Deshbord from './Components/Deshbord/Deshbord.jsx';

const router = createBrowserRouter([
  {
    path : '/',
    element : <App></App>, 
    errorElement: <Error></Error>, 
    children : [
      {
        path: '/', 
        element : <Home></Home>
      },
      {
        path : '/beshbord',
        element: <Deshbord></Deshbord>
      }
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
