'use client'

import React, { useState } from 'react';
import { supabase } from "@/utils/supabaseClient";
import { Text, Input, Box, Button, Center} from '@chakra-ui/react';
import { useRouter } from "next/navigation";

function SignIn() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) {
      throw error;
    } else {
      router.push("/top")
    }
  }

  return (
    <section>
      <form onSubmit={onSubmit}>
        <Box width={"100%"} height={"100vh"} bgColor={"gray.200"}>
          <Center>
            <Box h={30} w={350} pt={200}>
              <Center>
                <Text fontSize={20} as="b">ログイン</Text>
              </Center>
                <Text fontSize={10}>メールアドレス</Text>
              <Input type="email"
                placeholder="mail"
                autoCapitalize="email"
                bgColor={"white"}
                autoComplete="email"
                required value={email} 
                onChange={e => setEmail(e.target.value)} 
              />
              <Box mt={5}>
                <Text fontSize={10}>パスワード</Text>
                <Input type="password"
                  placeholder="password"
                  bgColor={"white"}
                  required value={password} 
                  onChange={e => setPassword(e.target.value)} 
                />
              </Box>
              <Center>
              <Box mt={5}>
                <Button type="submit" w={350} bgColor={'blue.100'} _hover={{bg: "gray.500"}}>ログイン</Button>
              </Box>
              </Center>
            </Box>
          </Center>
        </Box>
      </form>
    </section>
  )
}


export default SignIn;