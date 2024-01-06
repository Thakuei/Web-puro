import React from 'react'
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  useDisclosure,
  Center,
  Box,
  Text,
} from '@chakra-ui/react'
import { FiAlignJustify } from 'react-icons/fi'
import { supabase } from '@/utils/supabaseClient';
import { useState, useEffect } from 'react';


interface User {
  email?: string;
}

export default function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function fetchUser() {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUser(user);
      }
    }

    fetchUser();
  }, []);

  return (
    <>
      <Button bgColor={"gray.400"} _hover={{bgColor: "blue.300"}} onClick={onOpen}>
        <FiAlignJustify />
      </Button>
      <Drawer isOpen={isOpen} placement='left' onClose={onClose} >
      <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>
          <DrawerBody>
            {user && (
                <Box>
                  <Text fontSize={10}>ログイン中のユーザー：{user.email}</Text>
                </Box>
              )}
            <Center>
              <Button as={"a"} href='/' mt={10} bgColor={"blue.100"} _hover={{bgColor: "gray.400"}}>ログアウト</Button>
            </Center>
          </DrawerBody>
            <DrawerFooter>
                <Button variant='outline' mr={3} onClick={onClose} bgColor={"blue.100"} _hover={{bgColor: "gray.400"}}>
                  閉じる
                </Button>
            </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}