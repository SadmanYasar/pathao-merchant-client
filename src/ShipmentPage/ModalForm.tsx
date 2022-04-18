import { AddIcon } from "@chakra-ui/icons";
import { 
    useDisclosure, 
    Button, 
    ModalOverlay, 
    ModalContent, 
    ModalHeader, 
    ModalCloseButton, 
    ModalBody, 
    Modal,
    IconButton,
    HStack,
} from "@chakra-ui/react"

interface ModalFormProps {
    header: string;
    children: JSX.Element;
}

const AddProductModal = (props : ModalFormProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
        <IconButton 
            aria-label={'add-shipment-item'}
            type='button'
            color={'white'}
            bg='red.400'
            isRound
            _hover={{
                bgColor: 'red.500'
            
            }}
            _active={{
                bgColor: 'red.500'
            }}
            icon={<AddIcon boxSize={6} />}
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            onClick={onOpen}
        />
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>{props.header}</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                {props.children}
                <HStack w={'full'} justifyContent='right'>
                    <Button type='submit' bg='red.400' mr={3}>
                    Save
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </HStack>
            </ModalBody>
            </ModalContent>
        </Modal>
        </>
    )
}

export default AddProductModal