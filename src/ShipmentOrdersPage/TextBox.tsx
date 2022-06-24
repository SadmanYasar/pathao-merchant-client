import { Alert, Button, Textarea, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { ShipmentOrder } from '../models/ShipmentOrder'
import { newTypes, keysToUpdate } from '../utils/utils'

interface Props {
  initialValues: ShipmentOrder;
  setinitialvalues: React.Dispatch<React.SetStateAction<ShipmentOrder>>;
}

/*
==============================================
Take the inputs from text and map matches to 
Shipment type then set it to the initialValue 
state.
==============================================
*/

const TextBox = (props: Props) => {
  const [val, setVal] = useState<string>('')
  const [show, setshow] = useState<boolean>(false)

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = ({
    target
  }) => setVal(target.value)

  const handleClick = () => {
    const string = val.trim()
    const matches = newTypes.map((t) => string.match(t)?.[0].trim())
    const isNull = matches.some((m) => !m)
    if (isNull) return setshow(false)
    const initialValues = matches.reduce(
      (prev, current, i) => ({ ...prev, [keysToUpdate[i]]: current }),
      {}
    )
    props.setinitialvalues({ ...props.initialValues, ...initialValues })

    setshow(true)
  }

  return (
    <VStack spacing={5} paddingBottom='5'>
      <Textarea
        value={val}
        onChange={handleChange}
        placeholder={'eg.\nname: Alto\nphone: 123\naddress: your address\ndue: 0\nweight:0.5'}
        size='lg'
        minHeight={40} />
      <Button onClick={handleClick} bg='red.400'>Set</Button>
      {!show && <Alert status='info'>{'Make sure the format is "Field Name: Value"'}</Alert>}
    </VStack>
  )
}

export default TextBox
