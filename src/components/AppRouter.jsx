import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from '../pages/About'
import Posts from '../pages/Posts'
import Error from '../pages/Error'
import PostIdPage from '../pages/PostIdPage'

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/about' element={<About />} />
            <Route exact path='/posts' element={<Posts />} />
            <Route exact path='/post:id' element={<PostIdPage />} />
            <Route path='/error' element={<Error />} />
        </Routes>
    )
}

export default AppRouter