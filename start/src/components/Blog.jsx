import React, { useEffect, useState} from 'react'


import { CoinNews } from '../config/api';
import axios from 'axios'
import BlogPosts from './BlogPosts';
import { Footer } from '.';
 


const Blog = () => {

    

    const [trendingNews, setTrendingNews] = useState([])
    
    const fetchTrendingNews = async () => {
        const { data } = await axios.get(CoinNews())

        setTrendingNews(data.results) 
        console.log(data)
    }

    useEffect(() => {
        fetchTrendingNews()
        
    
    }, [])

    console.log(trendingNews)

    const allBlogPosts = trendingNews.map((each, i) => 
        <BlogPosts key={each.i} 
                title={each.title} 
                description={each.description}
                creator={each.creator}
                link={each.link}
                category={each.category}
                pubDate={each.pubDate}
                 />)
    
    
  return (
    <div className='mt-20 p-6'>
        <div>
            <h3 className='font-bold text-3xl text-center'  > WeHodler Crypto Blog  & News</h3>
            <div>
                {allBlogPosts}
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Blog