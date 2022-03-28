import React, { FormEvent, useState } from 'react'
import { CSVLink } from 'react-csv'

const arr = [
  {
    'Name': 'john',
    'Phone': '12354'
  },
  {
    'Name': 'elton',
    'Phone': '222333'
  },

]

const ProductForm = () => {
    const [name, setname] = useState('')
    const [phone, setphone] = useState('')
    const [data, setdata] = useState(arr)

    /***
     * * handleSubmit
     * * Complete - Add download option of csv
     * TODO - Add indexedDB
     * TODO - Add file share option to whastapp or email
     */

    const handleSubmit = (e: FormEvent<HTMLElement>) => {
      e.preventDefault()

      setdata([...data, {'Name': name, 'Phone': phone}])
      console.log(data)
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
        <CSVLink data={data}>Download</CSVLink>
        </>
    )
}

export default ProductForm