import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Fotter from './Components/Fotter/Fotter'


function App() {

  return (
    <div>
      <div>
        <Header></Header>
        <Outlet></Outlet>
        <Fotter></Fotter>
      </div>
    </div>
  )
}

export default App
