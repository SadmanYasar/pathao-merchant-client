import ReactTestRenderer from 'react-test-renderer'
import AddShipmentButton from './AddShipmentButton'

describe('<AddShipmentButton />', () => {
    it('renders correctly', () => {
        const tree = ReactTestRenderer.create(<AddShipmentButton />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})