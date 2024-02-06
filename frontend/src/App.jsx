import './App.css'
import Navbar from './components/Navbar'
import Login from './components/Login'
import MentorRegistration from './components/MentorRegistration'

function App() {

  return (
    <div className='app'>
      <Navbar />
      {/* <Login /> */}
      <MentorRegistration />
    </div> 
  )
}

export default App