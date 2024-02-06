import './App.css'
// import Navbar from './components/Navbar'
// import Login from './components/Login'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Login Component</h1>}/>
        <Route path="/login" element={<h1>Login Component</h1>}/>
        <Route path="/registration" element={<h1>Registration Component</h1>}/>
        <Route path="/mentorDashboard" element={<h1>Mentor Component</h1>}/>
        <Route path="/adminDashboard" element={<h1>Admin Component</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App