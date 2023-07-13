import React, { useState } from 'react';
import { MouseEvent } from "react";
// const target = event.target as HTMLTextAreaElement;

interface Props {
    items : string[];
}

function Dropdown ({items} :Props)  {
  const [selectedOption, setSelectedOption] = useState('');

  
  
  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    console.log(event.target.value);
  };

//   interface Props {

//   }

  return (
    <select className='dropdown' value={selectedOption} onChange={handleOptionChange}>
      <option value=""> Filter By</option>
      {items.map(item => (
        <option value={item} key={item}>{item}</option>
        )) }
    </select>
  );
};

export default Dropdown;
