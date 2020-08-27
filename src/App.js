import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import './components/assets/css/bootstrap.min.css';
import Course from './components/Course/Course';

function App() {

  return (
    <div>

      <Header></Header>
      <Course></Course>

    </div>
  );
}

export default App;
