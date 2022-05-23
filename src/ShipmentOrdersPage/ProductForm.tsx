import { Box } from '@chakra-ui/react'
import { Formik, FormikState } from 'formik'
import { db } from '../models/db'
import { ShipmentOrder } from '../models/ShipmentOrder'
import * as Yup from 'yup'
import { InputControl, SelectControl } from 'formik-chakra-ui'
import { useState } from 'react'
import TextBox from './TextBox'

/*
===============================================================
Recipient zone is kept not required
Need to add feature where zone can be chosen from address input
But might need to change later
===============================================================
*/
const validationSchema = Yup.object({
  'ItemType(*)': Yup.string().required('Item Type is required'),
	'StoreName(*)': Yup.string().required('Store name is required').trim(),
  'RecipientName(*)': Yup.string().required('Recipient Name is required').trim(),
	'RecipientPhone(*)': Yup.string().required('Recipient Phone is required').trim(),
	'RecipientCity(*)': Yup.string().required('Recipient City is required').trim(),
	'RecipientZone(*)': Yup.string().trim(),
	'RecipientAddress(*)': Yup.string().required('Recipient Address is required').trim(),
	'AmountToCollect(*)': Yup.number().required('Must be 0 or greater').min(0),
	'ItemQuantity(*)': Yup.number().required('Must be 1 or greater').min(1),
	'ItemWeight(*)': Yup.number().required('Must be 0.5 or greater').min(0.5),
	ItemDesc: Yup.string().required().trim(),
})

interface Props {
  id?: number;
  toAdd: boolean;
  initialValues: ShipmentOrder;
	shipmentListId?: number;
  onClose?: () => void;
}

const ProductForm = (props: Props): JSX.Element => {
    const [initialvalues, setinitialvalues] = useState(props.initialValues)

    const onSubmit = async (values: ShipmentOrder, { resetForm } : { resetForm: (nextState?: Partial<FormikState<ShipmentOrder>> | undefined) => void }) => {

      const formattedValues = validationSchema.cast(values) as ShipmentOrder
      console.log(formattedValues)

      try {
        await db.shipmentOrders.add({
        shipmentListId: props.shipmentListId,
          ...formattedValues
        })

        resetForm()

      } catch (error: unknown) {
        console.log(error)
      }
    }

    const handleUpdate = async (values: ShipmentOrder) => {

      const formattedValues = validationSchema.cast(values) as ShipmentOrder

      try {
        await db.shipmentOrders.update(
          Number(props.id),
          {...formattedValues}
        )

      } catch (error: unknown) {
        console.log(error)
      }
    }

    return (
      <>
        <Formik
          enableReinitialize
          initialValues={initialvalues}
          onSubmit={props.toAdd? onSubmit : handleUpdate}
          validationSchema={validationSchema}
        >
          {({ handleSubmit }) => (
          <Box
            borderWidth='1px'
            rounded='lg'
            shadow='1px 1px 3px rgba(0,0,0,0.3)'
            maxWidth={800}
            p={6}
            m='10px auto'
            as='form'
            id='product-form'
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onSubmit={handleSubmit as any}
          >
            <TextBox setinitialvalues={setinitialvalues} />
            <SelectControl
              name='ItemType(*)'
              selectProps={{ placeholder: 'Select Item Type' }}
            >
              <option value='parcel'>Parcel</option>
              <option value='document'>Document</option>
            </SelectControl>
            <InputControl name='StoreName(*)' label='Store Name' />
            <InputControl name='RecipientName(*)' label='Recipient Name' />
            <InputControl name='RecipientPhone(*)' label='Recipient Phone' />
            <InputControl name='RecipientCity(*)' label='Recipient City' />
            <InputControl name='RecipientZone(*)' label='Recipient Zone' />
            <InputControl name='RecipientAddress(*)' label='Recipient Address' />
            <InputControl name='AmountToCollect(*)' label='Due' />
            <InputControl name='ItemQuantity(*)' label='Item Quantity' />
            <InputControl name='ItemWeight(*)' label='Item Weight' />
            <InputControl name='ItemDesc' label='Item Description' />
          </Box>)}
        </Formik>
      </>
    )
}

export default ProductForm