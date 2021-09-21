import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      body:{
        backgroundColor: '#8fc2e5'
      }
    }
  }
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <component {...pageProps}/>
    </ChakraProvider>
  )
}

export default MyApp