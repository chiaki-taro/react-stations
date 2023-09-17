// DO NOT DELETE

import './App.css'
import React, { useState } from 'react';
import Header from './Header';
import DogImage from './DogImage';
import Description from './Description';
import DogListContainer from './DogListContainer';
/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg");

  const fetchDogUrl = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((apiData) => {
        setDogUrl(apiData.message)
      });
  }

  return (
    <div>
      <Header />
      <div className='content'>
        <Description />
        <DogImage
          imageUrl={dogUrl}
          fetchDogUrl={fetchDogUrl}
        />
        <DogListContainer />
      </div>
    </div>
  )
}
