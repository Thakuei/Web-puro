'use client'

import React, { useState } from "react";
import { supabase } from "@/utils/supabaseClient";
import { Box, Flex, Text, Input, Center, Button, Link, useToast } from '@chakra-ui/react';
import { useRouter } from "next/navigation";

function SignUp() {
  const toast = useToast()
  // const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConf, setPasswordConf] = useState("")
  //ユーザーの登録
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })
    if (error) {
      throw error;
    } else {
      toast({title: "サインアップ成功",
      description: "確認メールをおくりました確認お願いします。",
      status: "success",
      duration: 9000,
      isClosable: true,
      position: "top",
    });
  }
  return (
      <section>
        <form onSubmit={onSubmit}>
        <Box width={"100%"} height={"100vh"} bgColor={"gray.200"}>
          <Center>
            <Box w={350} h={30} pt={120}>
              <Box>
                <Center>
                  <Flex>
                    <Text fontSize={20} as="b">新規会員登録</Text>
                  </Flex>
                </Center>
              </Box>
              <Box>
                  <Flex>
                    <Text fontSize={10}>メールアドレス</Text>
                  </Flex>
                <Input placeholder="mail"
                  bgColor={"white"}
                  required value={email}
                  autoCapitalize="none"
                  onChange={e => setEmail(e.target.value)}
                />
              </Box>
              <Box mt={5}>
                  <Flex>
                    <Text fontSize={10}>パスワード</Text>
                  </Flex>
                <Input placeholder="password"
                  bgColor={"white"}
                  required value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </Box>
              <Box mt={5}>
                <Flex>
                  <Text fontSize={10}>パスワード（確認）</Text>
                </Flex>
                <Input type="password"
                  placeholder="password confirmation"
                  bgColor={"white"}
                  required value={passwordConf}
                  onChange={e => setPasswordConf(e.target.value)}
                />
              </Box>
              <Center>
                <Box pt={5}>
                  <Button type="submit" bgColor={"blue.100"}  _hover={{bg: "gray.500"}} w={350}>サインアップ</Button>
                </Box>
              </Center>
              <Text fontSize={13} pt={3}>アカウントをお持ちの方は<Link href="/login" color={"blue"}>こちら</Link></Text>
            </Box>
          </Center>
        </Box>
        </form>
      </section>
    )
  }
}

export default SignUp;