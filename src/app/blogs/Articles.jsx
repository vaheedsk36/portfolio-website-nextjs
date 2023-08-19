import React from 'react'
import MainLayout from "../layout";
import ArticlesCard from './ArticlesCard';

const Articles = () => {
    const title = "title";
    const coverImage = "demo.com";
    const slug = "haskdfjla";
  return (
    // <MainLayout>
        <ArticlesCard {...{title,coverImage,slug}}/>
    // </MainLayout>
  )
}

export default Articles