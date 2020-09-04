import React from 'react';
import Button from 'react-bootstrap/Button'
import {Card} from 'react-bootstrap'

import './App.css';
import News from './Component/News/News';
import Header from './Component/Header/Header';
import TopHeadline from './Component/TopHeadline/TopHeadline';
import PropsPractice from './Component/PropsPractice/Props';
import PropsInArray from './Component/PropsPractice/PropsInArray';


function App() {
  return (
    <div>
      
      <TopHeadline></TopHeadline>
      <Header></Header>
      <Button variant="primary">REACT BOOTSTRAP </Button>{' '}
      <PropsPractice name = "Dhrubo"></PropsPractice>
      <PropsPractice name = "Shakib"></PropsPractice>
      <PropsPractice name = "Amdadul"></PropsPractice>
      <PropsPractice name = "Oaliullah"></PropsPractice>
      <PropsPractice name = "Rashed"></PropsPractice>
      <PropsPractice name = "Rahim"></PropsPractice>
      <PropsPractice name = "Pagol"></PropsPractice>
      <PropsInArray fruits = {['Mango', 'Lichi', 'Sofeda']}></PropsInArray>
    </div>
  );
}

export default App;
