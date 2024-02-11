import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Login from './components/Login'
import MentorRegistration from './components/MentorRegistration'
import MentorDashboard from './components/Mentor/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/registration' element={<MentorRegistration />} />
          <Route path='/mentorDashboard' element={<MentorDashboard/>} />
          <Route path='/adminDashboard' element={<h1>adminDashboard</h1>} />
        </Routes>
      </div> 
    </BrowserRouter>
  )
}
export default App