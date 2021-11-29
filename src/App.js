import React,  { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.js' ;
import Header from './components/Header/Header.js';
import Info from './components/Info/Info.js';
import Video from './components/Video/Video.js';
import Album from './components/PhotoAlbum/photos.js';


class App extends Component {

  render() {
    return (
      <div className='App'>
      <Navigation/>
      <Header/>
      <Info/>
      <Video/>
      <Album/>
      </div>
    )
  }
}

export default App;
