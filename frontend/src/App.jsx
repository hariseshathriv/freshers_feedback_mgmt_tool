import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Login from './components/Login'
import AdminPage from './components/Admin/AdminPage'
import MenteeView from './components/Admin/MenteeView'
import WeeklyComments from './components/Admin/WeeklyComments'
import MentorRegistration from './components/MentorRegistration'
import Layout from './Layout'

function App() {

  return (

    <BrowserRouter>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/registration' element={<MentorRegistration />} />
          <Route path='/mentorDashboard' element={<h1>mentorDashboard</h1>} />
          <Route path='/adminDashboard' element={<Layout/>} >
            <Route path = "/adminDashboard/:key1" element = {<MenteeView />} />
            <Route path = "/adminDashboard/:key1/:key2" element = {<WeeklyComments />} />
          </Route>

        </Routes>
      </div> 
    </BrowserRouter>
  )
}

export default App