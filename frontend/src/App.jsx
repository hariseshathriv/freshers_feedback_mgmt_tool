import './App.css'
import Navbar from './components/Navbar'
import Login from './components/Login'
import AdminPage from './components/AdminPage'

function App() {

  return (
    <div className='app'>
      <Navbar />
      <AdminPage />
    </div> 
  )
}

export default App