"use client"

import { Box, Button, Center, Flex } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const Router = useRouter()

  return (
    <Box width={"100%"} height={"100vh"} bgGradient={"linear(to-b, gray.100, blue.200)"}>
      <Center  pt={10}>
        <Flex>
          <Text fontSize="3xl" fontWeight={"bold"}>Not Found</Text>
        </Flex>
      </Center>
      <Center pb={20}>
        <Flex>
          <Text fontSize="4xl" fontWeight={"bold"}>404</Text>
        </Flex>
      </Center>
      <Center>
      <Flex>
        <Button size={"lg"} colorScheme='gray' onClick={() => Router.back()}>戻る</Button>
      </Flex>
      </Center>
    </Box>
  )
}