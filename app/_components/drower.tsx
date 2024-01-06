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
  Link,
} from '@chakra-ui/react'
import { FiAlignJustify } from 'react-icons/fi'

export default function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Button bgColor={"gray.400"} _hover={{bgColor: "blue.300"}} onClick={onOpen}>
        <FiAlignJustify />
      </Button>
      <Drawer isOpen={isOpen} placement='left' onClose={onClose} >
      <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
        <DrawerHeader>

        </DrawerHeader>

        <DrawerBody>
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