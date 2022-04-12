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
    buttonLabel: string
    children: JSX.Element
}

const ModalForm = (props : ModalFormProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
        <Button onClick={onOpen}>{props.buttonLabel}</Button>
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                {props.children}
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