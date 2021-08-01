import logo from './logo.svg';
import { BrowserRouter, Route, Link } from "react-router-dom";
import React,{useState,useEffect} from "react";
import './App.css';
import { Component } from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import { react } from '@babel/types';

class App extends Component {

  
  render(){
    const {user,userstate} =useState('');
    
    return(
    <BrowserRouter>
    {/* 設定路由，首頁為Home */}
    <Route exact path="/" component={Home} /> 
    {/* 設定路由，跳轉至Login頁面 */}
    <Route path="/Login" component={Login}/> 
    </BrowserRouter>
   

    

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
);
}
}    
export default App;
