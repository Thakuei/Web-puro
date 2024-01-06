'use client'

import { Text, Box, Flex, Center } from "@chakra-ui/react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";


export default function Footer (){
  return (
    <Box bgColor={"blue.200"} bottom={0} position={"fixed"} left={0} right={0} zIndex={"docked"}>
      <Center>
        <Flex mt={2} mb={2}>
          <Link href={"https://github.com/Thakuei"}>
          <FaGithub size={30}/>
          </Link>
          <Center>
            <Box fontSize={10} ml={10} fontWeight={"bold"}>
              <Link href={"https://github.com/Thakuei"}>GitHub</Link>
            </Box>
          </Center>
        </Flex>
      </Center>
    </Box>
  )
}