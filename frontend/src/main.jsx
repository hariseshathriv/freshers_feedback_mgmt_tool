import React from 'react'
import ReactDOM from 'react-dom/client'
import AdminPage from './components/Admin/AdminPage'
import MenteeView from './components/Admin/MenteeView'
import WeeklyComments from "./components/Admin/WeeklyComments";
import Layout from './Layout.jsx'
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/admin" element = {<Layout />}>
      <Route path = "/admin/:key1" element = {<MenteeView />} />
      <Route path = "/admin/:key1/:key2" element = {<WeeklyComments />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
