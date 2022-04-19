import { Box, Button, HStack } from '@chakra-ui/react';
import { Formik, FormikState } from 'formik';
import { db } from '../models/db';
import { ShipmentOrder } from '../models/ShipmentOrder';
import * as Yup from "yup";
import { InputControl, SelectControl } from 'formik-chakra-ui';

interface Props {
	shipmentListId: number;
  onClose: () => void;
}

const initialOrderValues: ShipmentOrder = {
	'ItemType(*)': 'parcel',
	'StoreName(*)': '',
  MerchantOrderId: '',
  'RecipientName(*)': '',
	'RecipientPhone(*)': '',
	'RecipientCity(*)': '',
	'RecipientZone(*)': '',
  RecipientArea: '',
	'RecipientAddress(*)': '',
	'AmountToCollect(*)': 0,
	'ItemQuantity(*)': 1,
	'ItemWeight(*)': 0,
	ItemDesc: '',
  SpecialInstruction: ''
}

const validationSchema = Yup.object({
  'ItemType(*)': Yup.string().required('Item Type is required'),
	'StoreName(*)': Yup.string().required('Store name is required'),
  'RecipientName(*)': Yup.string().required('Recipient Name is required'),
	'RecipientPhone(*)': Yup.string().required('Recipient Phone is required'),
	'RecipientCity(*)': Yup.string().required('Recipient City is required'),
	'RecipientZone(*)': Yup.string().required('Recipient Zone is required'),
	'RecipientAddress(*)': Yup.string().required('Recipient Address is required'),
	'AmountToCollect(*)': Yup.number().required('Must be 0 or greater').min(0),
	'ItemQuantity(*)': Yup.number().required('Must be 1 or greater').min(1),
	'ItemWeight(*)': Yup.number().required('Must be 0 or greater').min(0),
	ItemDesc: Yup.string().required(),
});

const ProductForm = ({ shipmentListId, onClose }: Props): JSX.Element => {
    //const [fields, setfields] = useState<ShipmentOrder>(initialOrderValues)

    const handleSubmit = async (values: ShipmentOrder, { resetForm } : { resetForm: (nextState?: Partial<FormikState<ShipmentOrder>> | undefined) => void }) => {

      try {
        await db.shipmentOrders.add({
        shipmentListId: shipmentListId,
          ...values
        })

        resetForm()

      } catch (error: unknown) {
        console.log(error)
      }
    }

    return (
      <>
        <Formik
          initialValues={initialOrderValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ handleSubmit, errors }) => (
          <Box
            borderWidth="1px"
            rounded="lg"
            shadow="1px 1px 3px rgba(0,0,0,0.3)"
            maxWidth={800}
            p={6}
            m="10px auto"
            as="form"
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onSubmit={handleSubmit as any}
          >
            <SelectControl
              name="ItemType(*)"
              selectProps={{ placeholder: "Select Item Type" }}
            >
              <option value="parcel">Parcel</option>
              <option value="document">Document</option>
            </SelectControl>
            <InputControl name='StoreName(*)' label="Store Name" />
            <InputControl name='RecipientName(*)' label="Recipient Name" />
            <InputControl name='RecipientPhone(*)' label="Recipient Phone" />
            <InputControl name='RecipientCity(*)' label="Recipient City" />
            <InputControl name='RecipientZone(*)' label="Recipient Zone" />
            <InputControl name='RecipientAddress(*)' label="Recipient Address" />
            <InputControl name='AmountToCollect(*)' label="Due" />
            <InputControl name='ItemQuantity(*)' label="Item Quantity" />
            <InputControl name='ItemWeight(*)' label="Item Weight" />
            <InputControl name='ItemDesc' label="Item Description" />
            <HStack w={'full'} justifyContent='right' paddingTop={4}>
              <Button type='submit' bg='red.400' mr={3} disabled={errors === {}}>
              Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </HStack>
          </Box>)}
        </Formik>
      </>
    )
}

export default ProductForm