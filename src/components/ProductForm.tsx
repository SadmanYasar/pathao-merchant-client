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
	StoreName: 'I Am Your Hope',
  RecipientName: '',
	RecipientPhone: '',
	RecipientCity: '',
	RecipientZone: '',
	RecipientAddress: '',
	AmountToCollect: 0,
	ItemQuantity: 1,
	ItemWeight: 0.46,
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
        <Box w={'full'}>
          <form onSubmit={handleSubmit}>
            <VStack w={'full'} p='4' spacing={4}>
              <FormControl>
                <Input
                  id='storeName'
                  type={'text'}
                  name='StoreName' 
                  value={fields.StoreName}
                  onChange={handleChange}
                  placeholder='Store Name'
                />
              </FormControl>
              <FormControl>
                <Input
                  id='recipientName'
                  type={'text'}
                  name='RecipientName' 
                  value={fields.RecipientName}
                  onChange={handleChange}
                  placeholder='Recipient Name'
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