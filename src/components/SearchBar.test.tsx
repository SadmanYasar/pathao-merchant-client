import Renderer from 'react-test-renderer'
import SearchBar from './SearchBar'

const mock1 = jest.fn()
const mock2 = jest.fn()

describe('<SearchBar />', () => {
  it('renders correctly', () => {
    const tree = Renderer.create(
      <SearchBar
        value=''
        visible={true}
        clearInput={mock1}
        onChange={mock2}
      />)

    expect(tree).toMatchInlineSnapshot(`
<div
  className="chakra-form-control css-0"
  role="group"
>
  <div
    className="chakra-input__group css-4302v8"
  >
    <input
      className="chakra-input css-0"
      disabled={false}
      id="title"
      onBlur={[Function]}
      onChange={[MockFunction]}
      onFocus={[Function]}
      placeholder="Search or add a shipment"
      readOnly={false}
      required={false}
      type="text"
      value=""
    />
    <div
      className="chakra-input__right-element css-dp9r5f"
    >
      <button
        className="chakra-button css-5c2176"
        onClick={[MockFunction]}
        type="button"
      >
        <svg
          className="chakra-icon css-onkibi"
          focusable={false}
          viewBox="0 0 24 24"
        >
          <path
            d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  </div>
</div>
`)
  })
})