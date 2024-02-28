import React, { useState } from 'react';
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import Home from './Pages/Home'
import SignUp from './Pages/SignUp'
import { Route,Routes } from 'react-router';
import Navbar from './Component/Navbar';
import PrivateRoute from './Component/PrivateRoute';


function App() {

  const[isLoggedIn,setIsLoggedIn]=useState(false);

  return (
    <div className="w-screen h-screen bg-cyan-900">
            {/* pahle hmara navbar aayega */}
      <Navbar isLoggedIn={isLoggedIn}  setIsLoggedIn={setIsLoggedIn}/>
      {/* navbar ke baad hmare sabhi routes aayenge */}

    <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />}/>
        <Route path='/signup' element={<SignUp setIsLoggedIn={setIsLoggedIn} />}/>
        <Route path='/dashboard' element={
        <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard/> 
        </PrivateRoute>
      }/>
      

    </Routes> 

         </div>
  );
}

export default App;
