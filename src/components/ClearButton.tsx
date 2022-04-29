import React from 'react'
import { CloseIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';

interface ClearButtonProps {
    visible: boolean;
    onClick: () => void
}

const ClearButton = ({ visible, onClick }: ClearButtonProps) => {
    return(
        <>
            {visible && <Button 
                            colorScheme='red' 
                            variant='link'
                            onClick={onClick}>
                            <CloseIcon />
                        </Button>}
        </>
    )
}

export default ClearButton