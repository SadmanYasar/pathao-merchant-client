import ReactTestRenderer from 'react-test-renderer'
import AddShipmentButton from './AddShipmentButton'

describe('<AddShipmentButton />', () => {
  it('renders correctly', () => {
    const tree = ReactTestRenderer.create(<AddShipmentButton />).toJSON()
    expect(tree).toMatchInlineSnapshot(`
<div
  style={Object {}}
>
  <button
    className="chakra-button css-1u4l63n"
    id="login-button"
    type="submit"
  >
    Add
  </button>
</div>
`)
  })
})