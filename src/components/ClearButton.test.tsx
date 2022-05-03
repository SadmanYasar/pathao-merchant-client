import ReactTestRenderer from 'react-test-renderer'
import ClearButton from './ClearButton'

describe('<ClearButton />', () => {
    it('renders if visible true', () => {
        const mockFn = jest.fn()
        const tree = ReactTestRenderer
            .create(<ClearButton visible={true} onClick={mockFn} />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('renders nothing if visible false', () => {
        const mockFn = jest.fn()
        const tree = ReactTestRenderer
            .create(<ClearButton visible={false} onClick={mockFn} />)
            .toJSON()
        expect(tree).toBe(null)
    })
})