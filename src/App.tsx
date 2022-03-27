import React, { useState } from 'react';
import json2csv from 'json2csv';

const App = () => {
  const [name, setname] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log('ok')
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input 
            type='text' 
            id='name' 
            value={name}
            onChange={({target}) => setname(target.value)}/>
        </label>
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}

export default App;
