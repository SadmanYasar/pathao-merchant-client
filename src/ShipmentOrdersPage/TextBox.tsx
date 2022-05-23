import { Alert, Box, Button, Textarea, VStack } from "@chakra-ui/react"
import { useState } from "react"
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

const generateRegex = (x: string[]) => {
  return x.map((val) => {
    const string = `(?<=${val}(\\s{0,3}):).*`
    return new RegExp(string, "i")
  })
}

const types = ["name", "phone", "address"]
const newTypes = generateRegex(types)

const TextBox = (props: Props) => {
  const [val, setVal] = useState<string>("")
  const [show, setshow] = useState<boolean>(false)
  const [fieldValue, setFieldValue] = useState({})

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = ({
    target
  }) => setVal(target.value)

  const handleClick = () => {
    const string = val
    console.log(newTypes)
    console.log(string)
    const matches = newTypes.map((t) => string.match(t)?.[0].trim())
    console.log(matches)
    const isNull = matches.some((m) => !m)
    console.log(isNull)
    if (isNull) return setshow(false)
    const initialValues = matches.reduce(
      (prev, current, i) => ({ ...prev, [types[i]]: current }),
      {}
    )
    console.log(initialValues)
    setshow(true)
  }

  return (
    <VStack spacing={5} paddingBottom='5'>
      <Textarea value={val} onChange={handleChange} placeholder={'Paste text here'} />
      <Button onClick={handleClick} bgColor='red.400'>Set</Button>
      {/* {show && <Alert status="success">Works!</Alert>}
      {!show && <Alert status="error">Missing field(s)</Alert>} */}
    </VStack>
  )
}

export default TextBox
