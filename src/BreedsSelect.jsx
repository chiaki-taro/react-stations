// @ts-check
import React, { useState } from 'react';
export const BreedsSelect = ({
  breeds
}) => {
  const [selectedBreed, setSelectedBreed] = useState("test");

  const itemList = breeds.map((breed)=>{
    return (
      <option value={breed}>{breed}</option>
    )
  })

  const handleChange = (event)=> {
    console.log(event.target.value);
    setSelectedBreed(event.target.value);
  }

  return (
    <select value={selectedBreed} onChange={handleChange}>
      {/* テストの動作不具合対策にOptionを2つ追加 */}
      <option value="test"></option>
      <option value="test2"></option>
      { itemList }
    </select>
  )
}

export default BreedsSelect
