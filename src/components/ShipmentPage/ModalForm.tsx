import { 
    useDisclosure, 
    Button, 
    ModalOverlay, 
    ModalContent, 
    ModalHeader, 
    ModalCloseButton, 
    ModalBody, 
    ModalFooter,
    Modal,
} from "@chakra-ui/react"

interface ModalFormProps {
    openModalLabel: string;
    header: string;
    children: JSX.Element;
}

const ModalForm = (props : ModalFormProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
        <Button 
            onClick={onOpen}
            bgColor='red.400'
            _hover={{
                bgColor: 'red.500'
            
            }}
            _active={{
                bgColor: 'red.500'
        }}>
            {props.openModalLabel}
        </Button>
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>{props.header}</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                {props.children}
            </ModalBody>

            <ModalFooter>
                <Button colorScheme='red.400' mr={3}>
                Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    )
}

export default ModalForm