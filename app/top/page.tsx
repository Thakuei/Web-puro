"use client"

import Footer from '../_components/footer';
import Header from '../_components/header';
import Post from '../_components/post';
import React from "react"
import { Button, Box, Input, Text, Textarea } from '@chakra-ui/react';
import Top from '../_components/top';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


export default function Home() {
  const router = useRouter()

  return (
    <>
      <Header />
        <Post />
        <Top />
      <Footer />
    </>
  )
}


