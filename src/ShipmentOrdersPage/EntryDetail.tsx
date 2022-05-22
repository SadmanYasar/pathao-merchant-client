import { Box, TableContainer, Table, Tbody, Tr, Td, Button } from "@chakra-ui/react"
import { ShipmentOrder } from "../models/ShipmentOrder"
import ProductForm from "./ProductForm"

interface EntryDetailProps {
    item: ShipmentOrder;
    visible: boolean;
}

const EntryDetail = ({ item, visible } : EntryDetailProps) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, shipmentListId, MerchantOrderId, ...rest } = item
    const arr = Object.entries(rest)
    return(
        <Box>
        {visible && 
        <>
        <TableContainer>
            <Table variant='striped' colorScheme='red'>
                <Tbody>
                {arr.map((i, index) => 
                    <Tr key={index}>
                        <Td>{i[0].replace('(*)', '')}</Td>
                        <Td isNumeric>{i[1]}</Td>
                    </Tr>)}
                </Tbody>
            </Table>
        </TableContainer>
        </>}
        {!visible &&
        <>
            <Button form='product-form' type='submit'>Update</Button>
            <ProductForm initialValues={item} toAdd={false} id={id} />
        </>
        }
        </Box>
    )
}

export default EntryDetail