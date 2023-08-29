'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

export function Providers({ 
    children 
  }) {

    const customTheme = extendTheme({
      config: {
        initialColorMode: "dark", // Set the initial color mode to dark
        useSystemColorMode: false, // Disable automatic color mode switching based on user preferences
      },
    });
  return (
    <CacheProvider>
      <ChakraProvider theme={customTheme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}