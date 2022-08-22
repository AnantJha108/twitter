import React from 'react'
import AddTweet from './AddTweet'
import Left from './Left'
import Right from './Right'
import Tweet from './Tweet'

const Layout = () => {
  return (
    <div className='flex gap-8 px-5 dark:bg-black h-full'>
        <div className="w-1/4 fixed top-0">
            <Left/>
        </div>
        <div className="w-2/4  ml-96 mt-1">
          <AddTweet/>
          <Tweet/>
          <Tweet/>
          <Tweet/>
        </div>
        <div className="w-1/4">
          <Right/>
        </div>
    </div>
  )
}

export default Layout