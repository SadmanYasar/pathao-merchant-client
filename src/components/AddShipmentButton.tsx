import { Button } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const AddShipmentButton = () => {
    return(
        <motion.div whileTap={{ scale: 0.9 }}>
            <Button
                size='lg'
                w='full'
                id='login-button'
                type='submit'
                bgColor={'red.400'}
                _hover={{
                    bgColor: 'red.500'
                
                }}
                _active={{
                    bgColor: 'red.500'
                }}>
                Add
            </Button>
        </motion.div>
    )
}

export default AddShipmentButton