import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import Masthead from '../components/Masthead';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';

class Home extends Component{
    render(){
        return(
            <div>
                <Navigation/>
                <Masthead/>
                <About/>
                <Services/>
                <Portfolio/>
                <Footer/>
            </div>
        )
    }
}
export default Home;

