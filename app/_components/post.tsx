"use client"

import { supabase } from '@/utils/supabaseClient';
import { useState, useEffect } from 'react';
import React from "react"
import { Button, Box, Input, Text, Textarea } from '@chakra-ui/react';


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
      <Box pt={30}>
        <Box as="form" onSubmit={addPost}>
          <Box>
            <Text>タイトル</Text>
              <Input
                type="text"
                value={newTitle}
                width={60}
                onChange={(e) => setNewTitle(e.target.value)} />
            </Box>
            <Box>
              <Text>内容</Text>
              <Textarea value={newDescription} rows={2} width={60} resize={"none"}  onChange={(e) => setNewDescription(e.target.value)}/>
            </Box>
            <Box>
              <Button type="submit">登録</Button>
            </Box>
        </Box>
      </Box>
    </>
  )
}