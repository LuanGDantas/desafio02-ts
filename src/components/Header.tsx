import { Flex, Heading } from "@chakra-ui/react"

export const Header  = () => {
  return (
    <Flex
      maxHeight='3rem'
      width='100vw'
      padding='1rem 1.5rem'
      backgroundColor='#9413dc'
    >
      <Heading color='#ffffff'>Dio Bank</Heading>
    </Flex>
  );
}
