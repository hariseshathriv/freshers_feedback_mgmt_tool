import './App.css'
import Navbar from './components/Navbar'
import Login from './components/Login'
import AdminPage from './components/Admin/AdminPage'
import MenteeView from './components/Admin/MenteeView'
import WeeklyComments from './components/Admin/WeeklyComments'

function App() {

  return (
    <div className='app'>
      <Navbar />
      <AdminPage />
    </div> 
  )
}

export default App