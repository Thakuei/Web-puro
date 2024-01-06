'use client'

import { Text, Box, Flex, Center, Button } from "@chakra-ui/react"
import { FiAlignJustify } from "react-icons/fi";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Drawer from '../_components/drower';



export default function Header (){

  return (
    <Box bgColor={"white"} top={0} position={"sticky"} left={0} right={0} zIndex={"docked"}>
      <Box>
          <Drawer /> 
        <Center>
        </Center>
      </Box>
      <Center>
      </Center>
    </Box>
  )
}