import { Button } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { FormEvent } from "react";

interface AddShipmentButtonProps {
    handleSubmit: (e: FormEvent<HTMLElement>) => Promise<void>;
}

const AddShipmentButton = ({ handleSubmit } : AddShipmentButtonProps) => {
    return(
        <motion.div whileTap={{ scale: 0.9 }}>
            <Button
                size="lg"
                w='full'
                id='login-button'
                type="submit"
                onClick={handleSubmit}
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