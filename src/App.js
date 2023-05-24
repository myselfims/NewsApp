import logo from './logo.svg';
import './App.css';


import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Item from './components/Item';
import LoadingBar from 'react-top-loading-bar'


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Slider from './components/Slider';

const App = ()=>{

  const [state,setState] = useState({mode : 'light',progress : 10})

  const setProgress = (progress)=>{
    setState({mode : 'light',progress : progress})
  }
 
    return (
      <Router>
      <div className={`bg-${state.mode}`}>
        <Navbar mode={state.mode} toggler={null} />
        <LoadingBar
        height={2}
        color='#f11946'
        progress={state.progress}
        />
        <div className="container d-flex justify-content-center">
          <Slider />
        </div>
        <div className={`container d-flex justify-content-center bg-${state.mode}`}>
        <Routes>
          <Route exact path='/' element={<Item setProgress={setProgress} key='all' mode={state.mode} category='all' />} />
          <Route exact path='/NewsApp/' element={<Item setProgress={setProgress} key='home' mode={state.mode} category='all' />} />
          <Route exact path='/national' element={<Item setProgress={setProgress} key='national' mode={state.mode} category='national' />} />
          <Route exact path='/science' element={<Item setProgress={setProgress} key='science' mode={state.mode} category='science' />} />
          <Route exact path='/sports' element={<Item setProgress={setProgress} key='sports' mode={state.mode} category='sports' />} />
          <Route exact path='/world' element={<Item setProgress={setProgress} key='world' mode={state.mode} category='world' />} />
          <Route exact path='/hatke' element={<Item setProgress={setProgress} key='hatke' mode={state.mode} category='hatke' />} />
          <Route exact path='/hatke' element={<Item setProgress={setProgress} key='hatke' mode={state.mode} category='hatke' />} />
        </Routes>
        </div>
      </div>
      </Router>
    )
  }

export default App

