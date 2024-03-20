import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Login.jsx'
import Home from './Home.jsx'
import Jacket from './Jacket.jsx';
import All from './All.jsx';
import Pant from './Pant.jsx';
import Redj from './Redj.jsx';
import Fj from './Fj.jsx';
import Bcj from './Bcj.jsx';
import Offwhite from './Offwhite.jsx'
import Bleather from './Bleather.jsx'
import Btack from './Btack.jsx'
import Gjack from './Gjack.jsx'
import Gpant from './Gpant.jsx'
import Rbjack from './Rbjack.jsx'
import Bbpant from './Bbpant.jsx'
import Sue from './Sue.jsx'
import Opant from './Opant.jsx'

function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/Register' element={<Signup />}></Route>
    <Route path='/login' element={<Login />}></Route>
    <Route path='/home' element={<Home />}></Route>
    <Route path='/Jacket' element={<Jacket />}></Route>
    <Route path='/All' element={<All />}></Route>
    <Route path='/Pant' element={<Pant />}></Route>
    <Route path='/Redj' element={<Redj />}></Route>
    <Route path='/Fj' element={<Fj />}></Route>
    <Route path='/Bcj' element={<Bcj />}></Route>
    <Route path='/Offwhite' element={<Offwhite />}></Route>
    <Route path='/Bleather' element={<Bleather />}></Route>
    <Route path='/Btack' element={<Btack />}></Route>
    <Route path='/Gjack' element={<Gjack />}></Route>
    <Route path='/Gpant' element={<Gpant />}></Route>
    <Route path='/Rbjack' element={<Rbjack />}></Route>
    <Route path='/Bbpant' element={<Bbpant />}></Route>
    <Route path='/Sue' element={<Sue />}></Route>
    <Route path='/Opant' element={<Opant />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App