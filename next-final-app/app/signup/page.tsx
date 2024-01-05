'use client'

import React, { useState } from "react";
import { supabase } from "@/utils/supabaseClient";
import { Box, Flex, Text, Input, Center, Button } from '@chakra-ui/react';
import { SiNextdotjs } from "react-icons/si";

function SignUp() {
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
    }
  }
  return (
      <section>
        <form onSubmit={onSubmit}>
        <Box  width={"100%"} height={"100vh"} bgColor={"gray.200"}>
        <Center>
          <Box w={64} h={64} mt={56}>
            <Box>
              <Center>
                <Flex>
                  <SiNextdotjs size={"2em"} color={"blue"} />
                  <Text fontSize={20} as="b">アカウントを作る</Text>
                </Flex>
              </Center>
            </Box>
            <Box>
              <Center>
                <Flex>
                  <Text>メールアドレス</Text>
                </Flex>
              </Center>
              <Input placeholder="Email"
                bgColor={"white"}
                required value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Box>
            <Box>
              <Center>
                <Flex>
                    <Text>パスワード</Text>
                </Flex>
              </Center>
              <Input placeholder="Password"
                bgColor={"white"}
                required value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </Box>
            <Box>
              <Center>
                <Flex>
                  <Text>パスワード（確認）</Text>
                </Flex>
              </Center>
              <Input type="password"
                bgColor={"white"}
                required value={passwordConf}
                onChange={e => setPasswordConf(e.target.value)}
              />
            </Box>
            <Center>
              <Box pt={10}>
                <Button type="submit" bgColor={"blue.100"} color={"gray.900"}>サインアップ</Button>
              </Box>
            </Center>
          </Box>
        </Center>
        </Box>
        </form>
      </section>
  )
}

export default SignUp;