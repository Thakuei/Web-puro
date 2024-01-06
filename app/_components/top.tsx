'use client'

import { supabase } from '@/utils/supabaseClient';
import { Box, Table, Text, Tbody, Tr, Td, Th, Thead, Button } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

interface Post {
  id: number;
  createdAt: string;
  title: string;
  description: string;
}

export default function Top() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    (async () => await indexPost())();
  }, []);

  const indexPost = async () => {
    try {
      const { data, error } = await supabase.from("Post").select("*");
      if (error) throw error;
      setPosts(data as Post[]);
    } catch (error) {
      alert((error as Error).message);
      setPosts([]);
    }
  };

  const deletePost = async (id: number) => {
    try {
      const { error } = await supabase.from("Post").delete().match({ id });
      if (error) throw error;

      setPosts(posts.filter(post => post.id !== id));
    } catch (error) {
      alert((error as Error).message);
    }
  }


  return (
    <>
      <Box>
        <Text textAlign={"center"} fontWeight={"bold"} mt={10}>投稿スレッド</Text>
        <Box overflowY={"auto"} maxH={40}>
          <Table>
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>タイトル</Th>
                <Th>内容</Th>
                <Th>投稿日</Th>
                <Th>削除</Th>
              </Tr>
            </Thead>
            <Tbody>
              {posts.map((post) => (
                <Tr key={post.id}>
                  <Td>{post.id}</Td>
                  <Td>{post.title}</Td>
                  <Td>{post.description}</Td>
                  <Td>{new Date(post.createdAt).toLocaleString()}</Td>
                  <Td>
                    <Button bgColor={'cyan.100'} _hover={{bgColor: 'cyan.300'}} onClick={() => deletePost(post.id)}>削除</Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
    </>
  );
}

