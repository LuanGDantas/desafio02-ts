import { Button } from '@chakra-ui/react'
import { MouseEvent } from 'react';

interface IButtonsOnClick {
  handleLogin: (event: MouseEvent) => void
}

export const ButtonOnClick = ({ handleLogin }: IButtonsOnClick) => {
  return(
    <Button onClick={handleLogin} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
      Entrar
    </Button>
  )
}