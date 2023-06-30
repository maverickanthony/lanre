import React from 'react'


const BlogPosts = ({title, link, category, creator, description, pubDate}) => {


  return (
    <div className='mt-10'>
        <a href={link} target="_blank" rel="noopener noreferrer">
            <div className='border shadow-md border-b-slate-500 p-4 cursor-pointer rounded-md' >
                <div></div>
                <div>
                    <div className='flex justify-between text-gray-400 text-sm'>
                        <p>{pubDate}</p>
                        <p>{creator}</p>
                    </div>
                    <h3 className='font-bold text-xl my-4'>{title}</h3>
                    <p>{description}</p>
                    <p className='mt-6 p-1 bg-blue-200 uppercase text-blue-500 text-sm font-bold w-fit rounded-md'>{category}</p>
                </div>
            </div>
        </a>
    </div>
  )
}

export default BlogPosts