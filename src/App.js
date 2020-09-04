import React from 'react';
import Button from 'react-bootstrap/Button'
import {Card} from 'react-bootstrap'

import './App.css';
import News from './Component/News/News';
import Header from './Component/Header/Header';
import TopHeadline from './Component/TopHeadline/TopHeadline';


function App() {
  return (
    <div>
      
      <TopHeadline></TopHeadline>
      <Header></Header>
      <Button variant="primary">REACT BOOTSTRAP </Button>{' '}
      
    </div>
  );
}

export default App;
