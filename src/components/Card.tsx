import { 
  Center,
  Input,
  FormControl,
  FormLabel,
  Flex,
  Heading,
  Spacer,
} from '@chakra-ui/react'
import { login } from '../services/login';
import { ButtonOnClick } from './ButtonOnClick';

export const Card = () => {
  async function handleLogin() {
    login('luan@email.com', '1234567');
  }

  return(
    <Flex
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
      }} 
      minHeight='100vh'
      backgroundColor='#9413dc' 
      padding='25px'
    >
      <Flex
        flexDirection='column'
        gap='2rem'
        height='25rem' 
        width='35rem' 
        backgroundColor='#FFFFFF' 
        borderRadius='25px' 
        padding='25px 50px' 
      >
        <Center>
          <Heading size='md'>Faça o login</Heading>
        </Center>
        <Flex flexDirection='column'>
          <FormControl isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type='email' />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input type='password' />
          </FormControl>
          <Spacer></Spacer>
          <Center marginTop='2rem'>
            <ButtonOnClick handleLogin={handleLogin}></ButtonOnClick>
          </Center>
        </Flex>
      </Flex>
    </Flex>
  )
}