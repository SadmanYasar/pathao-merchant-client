import json2csv from 'json2csv'
import React, { FormEvent, useState } from 'react'
import { CSVLink } from 'react-csv'

const ProductForm = () => {
    const [name, setname] = useState('')
    const [phone, setphone] = useState('')
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [data, setdata] = useState('')
    const fields = ['Name', 'Phone']
    const options = { fields }
  
    const arrX = [
      {
        'Name': 'john',
        'Phone': '12354'
      },
      {
        'Name': 'elton',
        'Phone': '222333'
      },
    ]

    //TODO - Add indexedDB
    //TODO - Add download option of csv
    //TODO - Add file share option to whastapp or email
  
    const handleSubmit = (e: FormEvent<HTMLElement>) => {
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
        .then(csv => {
          console.log(csv)
          setdata(csv)
        })
        .catch(e => console.log(e))
    }
    return (
        <>
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
        <CSVLink data={arrX}>Download</CSVLink>
        </>
    )
}

export default ProductForm