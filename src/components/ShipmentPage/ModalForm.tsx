import { 
    useDisclosure, 
    Button, 
    ModalOverlay, 
    ModalContent, 
    ModalHeader, 
    ModalCloseButton, 
    ModalBody, 
    ModalFooter,
    Text,
    Modal,
} from "@chakra-ui/react"

const ModalForm = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
        <Button onClick={onOpen}>Open Modal</Button>
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                <Text>
                    Hehe boi
                </Text>
            </ModalBody>

            <ModalFooter>
                <Button colorScheme='blue' mr={3}>
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