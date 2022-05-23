import { Button } from "@chakra-ui/react"
import { ShipmentOrder } from "../models/ShipmentOrder"

interface Props {
    setinitialvalues: React.Dispatch<React.SetStateAction<ShipmentOrder>>;
}

const initialValues: ShipmentOrder = {
	'ItemType(*)': 'parcel',
	'StoreName(*)': 'haha',
    MerchantOrderId: '',
    'RecipientName(*)': 'hmmmmm',
	'RecipientPhone(*)': '',
	'RecipientCity(*)': 'asssssss',
	'RecipientZone(*)': 'wwww',
    RecipientArea: '',
	'RecipientAddress(*)': '',
	'AmountToCollect(*)': 0,
	'ItemQuantity(*)': 1,
	'ItemWeight(*)': 0,
	ItemDesc: '',
    SpecialInstruction: ''
}

const TextArea = (props: Props) => {
    return (
        <Button type='button' onClick={() => props.setinitialvalues(initialValues)}>Change</Button>
    )
}

export default TextArea