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
          // current active theme
          bg: "#02001E",
          navBg: "rgba(10, 25, 47, 0.85)",
          navLinkActive:"#64ffda",
          navShadow:"rgba(2,12,27,0.7)",
          card:"#112240",
          cardHover:"#176B87"
        },
        defaultTheme:{
          bg: "#02001E",
          navBg: "#200b8b3c",
          navLinkActive:"#16FF00",
          card:"#213363",
          cardHover:"#213d8d"
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