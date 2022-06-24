import { FormControl, InputGroup, Input, InputRightElement } from '@chakra-ui/react'
import ClearButton from './ClearButton'

interface SearchBarProps {
    value: string;
    visible: boolean;
    clearInput: () => void;
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const SearchBar = (props : SearchBarProps) => {
    return(
        <FormControl>
            <InputGroup>
                <Input
                    data-cy='searchOrAddTitleInput' 
                    id='title' 
                    type='text' 
                    value={props.value}
                    size='lg'
                    onChange={props.onChange}
                    placeholder='Search or add a shipment'
                />
                <InputRightElement>
                    <ClearButton visible={props.visible} onClick={props.clearInput} />
                </InputRightElement>
            </InputGroup>
        </FormControl>
    )
}

export default SearchBar