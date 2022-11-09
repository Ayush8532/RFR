import React from 'react'
import Topbar from './components/Topbar/Topbar'
import Home from './Pages/home/Home'
import Single from './Pages/single/Single'
import Settings from './Pages/settings/Settings'
import Login from './Pages/login/Login'
import Register from './Pages/register/Register'
import Write from './Pages/write/Write'
import Contact from './Pages/contact/Contact'
import { Route, Routes } from 'react-router-dom'



function App() {
  const user=true;
  return (
    <>
      <Topbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/register" element={user?<Home/>:<Register/>}/>
        <Route path="/login" element={user?<Home/>:<Login/>}/>
        <Route path="/write" element={user?<Write/>:<Register/>}/>
        <Route path="/contact" element={user?<Contact/>:<Register/>}/>
        <Route path="/settings" element={user?<Settings/>:<Register/>}/>
        <Route path="/post/:postId" element={<Single/>}/>
      </Routes>
    </>
  )
}

export default App