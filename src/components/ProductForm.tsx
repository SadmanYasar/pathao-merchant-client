import React, { FormEvent, useState } from 'react'
import { db } from '../models/db';

interface Props {
  shipmentListId: number
}

const ProductForm = ({ shipmentListId }: Props) => {
    const [name, setname] = useState('')
    const [phone, setphone] = useState('')

    const handleSubmit = async (e: FormEvent<HTMLElement>) => {
      e.preventDefault()

      try {
        const id = await db.shipmentOrders.add({
          shipmentListId: shipmentListId,
          name,
          phone
        })
        setname('')
        setphone('')
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
        </>
    )
}

export default ProductForm