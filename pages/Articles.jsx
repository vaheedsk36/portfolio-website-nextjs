import React from 'react'
import MainLayout from "../app/MainLayout";
import ArticlesCard from '../app/ArticlesCard';

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