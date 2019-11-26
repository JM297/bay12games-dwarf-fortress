import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from "./components/general/Nav";
import Footer from "./components/general/Footer";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Log_Page from "./components/log/Log_Page";
import Contact from "./components/contact/Contact";

// Main app where all the magic happens
export default class App extends Component {
  // render() is basically anything that you want to have show up on your webpage
  // return() is what shows up when rendered
  render() {
    return (
        <div className="App">
          <Nav/>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/log" component={Log_Page}/>
          <Route path="/contact" component={Contact}/>
          <Footer/>
        </div>
    );
  }
}
