import { Box, Button, Flex, Heading } from "@chakra-ui/react"
import { useContext } from "react"
import { AppContext } from "./AppContext"
import { useNavigate } from "react-router-dom"
import { changeLocalStorage } from "../services/storage"

interface IHeader {
  title: string
}

export const Header  = ({ title }: IHeader) => {
  const {isLoggedIn, setIsLoggedIn} = useContext(AppContext)
  const navigate = useNavigate()

  const logout = () => {
    setIsLoggedIn(false)
    changeLocalStorage({login: false})
    navigate('/')
  }

  return(
    <Flex padding='15px' justify='center'>
      <Box>
        <Heading color='#000'>{title}</Heading>
      </Box>
      
      {
        isLoggedIn && <Button onClick={() => logout()} position='absolute' top='15px' right='15px'>Sair</Button>
      }
      
    </Flex>
  )
}
