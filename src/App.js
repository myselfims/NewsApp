import logo from './logo.svg';
import './App.css';


import React, { Component, useState } from 'react'
import Navbar from './components/Navbar';
import Item from './components/Item';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Slider from './components/Slider';

export class App extends Component {
  constructor(){
    super()
    this.state = {
      mode : 'light'
    }
  }

  toggleMode(){
    console.log(this.state)
    // if(this.state.mode === 'light'){
    //   this.setState({mode:'dark'})
    // }else{
    //   this.setState({mode:'light'})
    // }
  }
 
  render() {
    return (
      <Router>
      <div className={`bg-${this.state.mode}`}>
        <Navbar mode={this.state.mode} toggler={this.toggleMode} />
        <div className="container d-flex justify-content-center">
          <Slider />
        </div>
        <div className={`container d-flex justify-content-center bg-${this.state.mode}`}>
        <Routes>
          <Route exact path='/' element={<Item key='all' mode={this.state.mode} category='all' />} />
          <Route exact path='/NewsApp/' element={<Item key='home' mode={this.state.mode} category='all' />} />
          <Route exact path='/national' element={<Item key='national' mode={this.state.mode} category='national' />} />
          <Route exact path='/science' element={<Item key='science' mode={this.state.mode} category='science' />} />
          <Route exact path='/sports' element={<Item key='sports' mode={this.state.mode} category='sports' />} />
          <Route exact path='/world' element={<Item key='world' mode={this.state.mode} category='world' />} />
          <Route exact path='/hatke' element={<Item key='hatke' mode={this.state.mode} category='hatke' />} />
          <Route exact path='/hatke' element={<Item key='hatke' mode={this.state.mode} category='hatke' />} />
        </Routes>
        </div>
      </div>
      </Router>
    )
  }
}

export default App

