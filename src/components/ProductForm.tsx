import { VStack } from '@chakra-ui/react';
import React, { FormEvent, useState } from 'react'
import { db } from '../models/db';
import { ShipmentOrder } from '../models/ShipmentOrder';

interface Props {
  shipmentListId: number
}

const initialValues: ShipmentOrder = {
  AmountToCollect: 0,
  ItemQuantity: 1,
  ItemType: 'parcel',
  ItemWeight: 0.46,
  RecipientAddress: '',
  RecipientCity: '',
  RecipientName: '',
  RecipientPhone: '',
  StoreName: 'I Am Your Hope',
  RecipientZone: '',
  itemDescription: ''
}

const ProductForm = ({ shipmentListId }: Props): JSX.Element => {
    const [fields, setfields] = useState<ShipmentOrder>(initialValues)

    const style = {
      margin: '10px',
      padding: '10px'
    }

    const handleSubmit = async (e : FormEvent<HTMLElement>) => {
      e.preventDefault()

      try {
        await db.shipmentOrders.add({
          shipmentListId: shipmentListId,
          ...fields
        })
        setfields(initialValues)

      } catch (error: unknown) {
        console.log(error)
      }
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange = ({ target }: any) => setfields({
      ...fields,
      [target.name]: target.value
    })
    
    return (
        <VStack w={'full'} p='4'>
        <form onSubmit={handleSubmit}>
        <label>
          Item Type:
          <input 
            style={style}
            type='text' 
            name='ItemType'
            value={fields.ItemType}
            onChange={handleChange}/>
        </label>
        <label>
          Store Name:
          <input 
            style={style}
            type='text' 
            name='StoreName' 
            value={fields.StoreName}
            onChange={handleChange}/>
        </label>
        <button type='submit'>Add</button>
        </form>
        </VStack>
    )
}

export default ProductForm