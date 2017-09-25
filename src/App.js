import React, { Component } from 'react';

import Header from './components/Header';
import Intro from './components/Intro';
import ItemList from './components/ItemList';
import Drupal from './components/Drupal';
import ReactJS from './components/ReactJS';
import Projects from './components/Projects';
import ProjectList from './components/ProjectList';
import Footer from './components/Footer';


class App extends Component {
  render() {

    return (
      <div className={this.props.className}>

        <Header/>
        <Intro/>
        <ItemList/>
        <Drupal/>
        <Projects/>
        <ProjectList/>
        <Footer/>
        <ReactJS/>

      </div>
    );

  }
}

export default App;
