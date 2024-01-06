"use client"

import { supabase } from '@/utils/supabaseClient';
import { useState, useEffect } from 'react';
import React from "react"
import { Button, Box, Input, Text, Textarea, Center } from '@chakra-ui/react';


export default function Home() {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const addPost = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const { error } = await supabase.from("Post").insert([
        {
          title: newTitle,
          description: newDescription,
        },
      ]);
      if (error) throw error;
      window.location.reload();
      setNewTitle("");
      setNewDescription("");
    } catch (error) {
      console.error('エラーオブジェクト2:', error);
      alert("データの新規登録ができません");
    }
  };

  return (
    <>
    <Center>
      <Box pt={30}>
        <Box as="form" onSubmit={addPost}>
          <Box>
            <Text fontSize={14} fontWeight={"bold"}>タイトル</Text>
              <Input
                type="text"
                value={newTitle}
                width={72}
                onChange={(e) => setNewTitle(e.target.value)} />
            </Box>
            <Box>
              <Text fontSize={14} pt={3} fontWeight={"bold"}>内容</Text>
              <Textarea value={newDescription} rows={2} width={72} resize={"none"} fontSize={14} onChange={(e) => setNewDescription(e.target.value)}/>
            </Box>
            <Box pt={3} textAlign={"center"}>
              <Button type="submit">登録</Button>
            </Box>
        </Box>
      </Box>
    </Center>
    </>
  )
}