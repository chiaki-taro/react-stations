// @ts-check
import React, { useEffect, useState } from 'react';
import BreedsSelect from './BreedsSelect';

export const DogListContainer = () => {
  const [ breeds, setBreeds ] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.message);
        let lists = Object.keys(data.message);
        console.log(lists);
        setBreeds(lists);
      });
  }, []);

  return (
    <BreedsSelect 
     breeds={breeds}
    />
  )
}

export default DogListContainer
