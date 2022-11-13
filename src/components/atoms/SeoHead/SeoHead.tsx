import Head from 'next/head';
import React from 'react'

interface HeadProps {
  title: string;
  author? :string;
}

const SeoHead = ({title}: HeadProps) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}

export default SeoHead