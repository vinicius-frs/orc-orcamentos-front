import { Box } from "@chakra-ui/react"
import { Header } from "./Header"

export const Layout = ({ children }: any) => {
  return(
    <Box minHeight='100vh' backgroundColor='#f6fad9'>
      <Header title='ORC Orçamentos' />
      { children }
    </Box>
  )
}
