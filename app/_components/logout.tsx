'use client'

import { supabase } from '@/utils/supabaseClient';
import { useRouter } from 'next/navigation';
import { Box, Button } from '@chakra-ui/react';


export default function Logout() {
  const router = useRouter();

  const outLogout = async(e) => {
    e.preventDefault();
    try{
      const { error:logoutError } = await supabase.auth.signOut()
      if (logoutError) {
        throw logoutError;
      }
      await router.push("/");
    }catch{
      alert('エラーが発生しました');
    }
  }

  return (
    <>
      <Box>
        <form onSubmit={outLogout}>
          <Button type='submit'>ログアウト</Button>
        </form>
      </Box>
    </>
  )
}