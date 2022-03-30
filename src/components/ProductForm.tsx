import React, { FormEvent, useState } from 'react'
//import { CSVLink } from 'react-csv'
import { db } from '../models/db';

const ProductForm = () => {
    const [name, setname] = useState('')
    const [phone, setphone] = useState('')

    /***
     * * handleSubmit
     * * Complete - Add download option of csv
     * TODO - Add indexedDB
     * TODO - Add file share option to whastapp or email
     */

    const handleSubmit = async (e: FormEvent<HTMLElement>) => {
      e.preventDefault()

      try {
        //setdata([...data, {'Name': name, 'Phone': phone}])
        const id = await db.shipmentOrders.add({
          name,
          phone
        })
        console.log(id)
      } catch (error) {
        console.log(error)
      }
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
        {/* <CSVLink data={data}>Download</CSVLink> */}
        </>
    )
}

export default ProductForm