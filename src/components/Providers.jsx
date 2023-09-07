'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

export function Providers({ 
    children 
  }) {

    const customTheme = extendTheme({
      config: {
        initialColorMode: "dark",
        useSystemColorMode: false,
      },
      colors: {
        blueTheme: {
          bg: "#02001E",
          navBg: "#200b8b3c",
          navLink: "#150639d5",
          navLinkActive:"#16FF00",
          subHeader: "#dee2e6",
          card:"#213363",
          cardHover:"#213d8d",
        },
        hover:{
          gray:"rgba(0, 0, 0, 0.6)"
        },
        social:{
          instagram:"#D53F8C",
          instagramHover:"#FF63B4",
          linkedin:"#0072b1",
          linkedinHover:"#1282B1",
          twitter:"#00acee",
          twitterHover:"#63C5F4",
          hashnode:"#265FF7",
          hashnodeHover:"#7A84E6"
        }
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