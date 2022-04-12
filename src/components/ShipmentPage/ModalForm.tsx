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
    child: JSX.Element
}

const ModalForm = ({ child } : ModalFormProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    if (!child) return null

    return (
        <>
        <Button onClick={onOpen}>Open Modal</Button>
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                {child}
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