import { Alert, Button, Textarea, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { ShipmentOrder } from '../models/ShipmentOrder'
import { UpdateKeyTypes } from '../types'

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

const keysToUpdate: UpdateKeyTypes[] = ['RecipientName(*)', 'RecipientPhone(*)', 'RecipientAddress(*)', 'AmountToCollect(*)', 'ItemWeight(*)']

const generateRegex = (x: string[]) => {
  return x.map((val) => {
    const string = `(?<=${val}(\\s{0,3}):).*`
    return new RegExp(string, 'i')
  })
}

const types = ['name', 'phone', 'address', 'due', 'weight']
const newTypes = generateRegex(types)

const TextBox = (props: Props) => {
  const [val, setVal] = useState<string>('')
  const [show, setshow] = useState<boolean>(false)

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = ({
    target
  }) => setVal(target.value)

  const handleClick = () => {
    const string = val.trim()
    console.log(newTypes)
    console.log(string)
    const matches = newTypes.map((t) => string.match(t)?.[0].trim())
    console.log(matches)
    const isNull = matches.some((m) => !m)
    console.log(isNull)
    if (isNull) return setshow(false)
    const initialValues = matches.reduce(
      (prev, current, i) => ({ ...prev, [keysToUpdate[i]]: current }),
      {}
    )
    console.log({...props.initialValues, ...initialValues})
    props.setinitialvalues({...props.initialValues, ...initialValues})

    setshow(true)
  }

  return (
    <VStack spacing={5} paddingBottom='5'>
      <Textarea value={val} onChange={handleChange} placeholder={'Paste text here'} size='lg' />
      <Button onClick={handleClick} bg='red.400'>Set</Button>
      {show && <Alert status='success'>Works!</Alert>}
      {!show && <Alert status='error'>Missing field(s)</Alert>}
    </VStack>
  )
}

export default TextBox
