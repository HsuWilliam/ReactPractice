import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Masthead from './components/Masthead';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import { Component } from 'react';

class App extends Component {
  render(){
    return(
    <div className="App">
        <Navigation/>
        <Masthead/>
        <About/>
        <Services/>
        <Portfolio/>
        <Footer/>
    </div>
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
