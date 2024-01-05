'use client'

import React, { useState } from 'react';
import { supabase } from "@/utils/supabaseClient";
import { Text, Input, Box, Button } from '@chakra-ui/react';

function SignIn() {

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
    }
  }

  return (
    <section>
      <form onSubmit={onSubmit}>
        <Box>
          <Text>メールアドレス</Text>
          <Input type="email" 
            required value={email} 
            onChange={e => setEmail(e.target.value)} 
          />
        </Box>
        <Box>
          <Text>パスワード</Text>
          <Input type="password" 
            required value={password} 
            onChange={e => setPassword(e.target.value)} 
          />
        </Box>
        <Box>
          <Button type="submit">ログイン</Button>
        </Box>
      </form>
    </section>
  )
}


export default SignIn;