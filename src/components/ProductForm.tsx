import { Box, Button, FormControl, HStack, Input, VStack } from '@chakra-ui/react';
import React, { FormEvent, useState } from 'react'
import { db } from '../models/db';
import { ShipmentOrder } from '../models/ShipmentOrder';

interface Props {
	shipmentListId: number;
  onClose: () => void;
}

const initialValues: ShipmentOrder = {
	ItemType: 'parcel',
	StoreName: '',
  RecipientName: '',
	RecipientPhone: '',
	RecipientCity: '',
	RecipientZone: '',
	RecipientAddress: '',
	AmountToCollect: '',
	ItemQuantity: '',
	ItemWeight: '',
	itemDescription: ''
}

const ProductForm = ({ shipmentListId, onClose }: Props): JSX.Element => {
    const [fields, setfields] = useState<ShipmentOrder>(initialValues)

    const handleSubmit = async (e : FormEvent<HTMLElement>) => {
      e.preventDefault()

      try {
        await db.shipmentOrders.add({
        shipmentListId: shipmentListId,
          ...fields
        })
        setfields({
          ...initialValues, 
          ItemType: fields.ItemType,
          StoreName: fields.StoreName,
          ItemQuantity: fields.ItemQuantity,
          ItemWeight: fields.ItemWeight
        })

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
        <Box w={'full'}>
          <form onSubmit={handleSubmit}>
            <VStack w={'full'} p='4' spacing={4}>
              <FormControl>
                <Input
                  id='itemType'
                  name='ItemType'
                  type={'text'}
                  value={fields.ItemType}
                  onChange={handleChange}
                  placeholder='Item type'
                />
              </FormControl>
              <FormControl>
                <Input
                  id='storeName'
                  name='StoreName'
                  type={'text'}
                  value={fields.StoreName}
                  onChange={handleChange}
                  placeholder='Store Name'
                />
              </FormControl>
              <FormControl>
                <Input
                  id='recipientName'
                  name='RecipientName'
                  type={'text'} 
                  value={fields.RecipientName}
                  onChange={handleChange}
                  placeholder='Recipient Name'
                />
              </FormControl>
              <FormControl>
                <Input
                  id='recipientPhone'
                  name='RecipientPhone'
                  type={'text'} 
                  value={fields.RecipientPhone}
                  onChange={handleChange}
                  placeholder='Recipient Phone'
                />
              </FormControl>
              <FormControl>
                <Input
                  id='recipientCity'
                  name='RecipientCity'
                  type={'text'} 
                  value={fields.RecipientCity}
                  onChange={handleChange}
                  placeholder='Recipient City'
                />
              </FormControl>
              <FormControl>
                <Input
                  id='recipientZone'
                  name='RecipientZone'
                  type={'text'} 
                  value={fields.RecipientZone}
                  onChange={handleChange}
                  placeholder='Recipient Zone'
                />
              </FormControl>
              <FormControl>
                <Input
                  id='recipientAddress'
                  name='RecipientAddress'
                  type={'text'} 
                  value={fields.RecipientAddress}
                  onChange={handleChange}
                  placeholder='Recipient Address'
                />
              </FormControl>
              <FormControl>
                <Input
                  id='amountToCollect'
                  name='AmountToCollect'
                  type={'number'} 
                  value={fields.AmountToCollect}
                  onChange={handleChange}
                  placeholder='Amount'
                />
              </FormControl>
              <FormControl>
                <Input
                  id='itemQuantity'
                  name='ItemQuantity'
                  type={'number'} 
                  value={fields.ItemQuantity}
                  onChange={handleChange}
                  placeholder='Item Quantity'
                />
              </FormControl>
              <FormControl>
                <Input
                  id='itemWeight'
                  name='ItemWeight'
                  type={'number'} 
                  value={fields.ItemWeight}
                  onChange={handleChange}
                  placeholder='Item Weight'
                />
              </FormControl>
              <FormControl>
                <Input
                  id='itemDescription'
                  name='itemDescription'
                  type={'text'} 
                  value={fields.itemDescription}
                  onChange={handleChange}
                  placeholder='Item Description'
                />
              </FormControl>
              <HStack w={'full'} justifyContent='right'>
                  <Button type='submit' bg='red.400' mr={3}>
                  Save
                  </Button>
                  <Button onClick={onClose}>Cancel</Button>
              </HStack>
            </VStack>  
          </form>
        </Box>
    )
}

export default ProductForm