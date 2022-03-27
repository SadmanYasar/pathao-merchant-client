import React, { useState } from 'react';
import json2csv from 'json2csv';

const App = () => {
  const [name, setname] = useState('')
  const [phone, setphone] = useState('')
  //const [data, setdata] = useState([])
  const fields = ['Name', 'Phone']
  const options = { fields }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const arr = [
      {
        'Name': name,
        'Phone': phone
      },
      {
        'Name': 'john',
        'Phone': '12354'
      },
      {
        'Name': 'elton',
        'Phone': '222333'
      },
    ]

    json2csv
      .parseAsync(arr, options)
      .then(csv => console.log(csv))
      .catch(e => console.log(e))
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
        <label>
          Phone:
          <input 
            type='text' 
            id='phone' 
            value={phone}
            onChange={({target}) => setphone(target.value)}/>
        </label>
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}

export default App;
