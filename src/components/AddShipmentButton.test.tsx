import ReactTestRenderer from 'react-test-renderer'
import AddShipmentButton from './AddShipmentButton'

it('works', () => {
    const tree = ReactTestRenderer.create(<AddShipmentButton />).toJSON()
    expect(tree).toMatchSnapshot()
})