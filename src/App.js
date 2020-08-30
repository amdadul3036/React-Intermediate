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
      <Button variant="primary">REACT BOOTSTRAP </Button>{' '}
      <Card>
        <Card.Body>How much should I learn?</Card.Body>
      </Card>
      <TopHeadline></TopHeadline>
      <News></News>
      <News></News>
      <News></News>
      <Header></Header>
      <News></News>
    </div>
  );
}

export default App;
