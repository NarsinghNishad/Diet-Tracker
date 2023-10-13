import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home'
import Signup from './Component/Signup';
import Login from './Component/Login';
import Addfooditem from './Component/Addfooditem';
import AddDiet from './Component/AddDiet';
import ManageUser from './Component/ManageUser';
import UpdateUser from './Component/UpdateUser';
import ManageDiet from './Component/ManageDiet';
import UpdateDiet from './Component/UpdateDiet';
import { AppProvider } from './AppContext';
import UserAuth from './UserAuth';




const App = () => {
  return (
    <div>
      <BrowserRouter >
        <AppProvider>
          <Navbar />

          <Routes >

            <Route element={<Home />} path='Home' />
            <Route element={<Signup />} path='Signup' />
            <Route element={<Login />} path='/' />
            <Route element={<Login />} path='/login' />
            <Route element={<Addfooditem />} path='addfooditem' />
            <Route element={<UserAuth> <AddDiet /> </UserAuth>} path='AddDiet' />
            <Route element={<ManageUser />} path='ManageUser' />
            <Route element={<UpdateUser />} path='UpdateUser' />
            <Route element={<ManageDiet />} path='ManageDiet' />
            <Route element={<UpdateDiet />} path='UpdateDiet' />



          </Routes>
        </AppProvider>

      </BrowserRouter>
    </div>
  )
}

export default App;
