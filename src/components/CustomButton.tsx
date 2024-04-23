import { Button } from "@chakra-ui/react"
import { MouseEventHandler } from "react"

interface ICustomButton {
  event: MouseEventHandler
}

export const CustomButton  = ({ event }: ICustomButton) => {
  return(
    <Button onClick={event} colorScheme='yellow' variant='outline' size='sm' width='100%' marginTop='5px'>
      Entrar
    </Button>
  )
}
