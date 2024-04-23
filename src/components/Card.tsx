import { 
  Center,
  Box
} from '@chakra-ui/react'

export const Card = ({children}: any) => {

  return(
    <Center>
      <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' maxWidth='50%' >
        {children}
      </Box>
    </Center>
  )
}