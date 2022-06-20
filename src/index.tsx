import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import { reducer, StateProvider } from './state'

ReactDOM.render(
  <ChakraProvider>
    <StateProvider reducer={reducer}>
      <App />
    </StateProvider>
  </ChakraProvider>,
  document.getElementById('root')
)
