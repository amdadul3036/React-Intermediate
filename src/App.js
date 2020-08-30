import React from 'react';
import Button from 'react-bootstrap/Button'
import {Card} from 'react-bootstrap'

import './App.css';
import News from './Component/News/News';


function App() {
  return (
    <div>
      <Button variant="primary">REACT BOOTSTRAP </Button>{' '}
      <Card>
        <Card.Body>How much should I learn?</Card.Body>
      </Card>
     
      <News></News>

    </div>
  );
}

export default App;
