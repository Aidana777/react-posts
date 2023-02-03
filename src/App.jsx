import './styles/app.css'
import Counter from './components/Counter'
import { useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'javaStript', body: 'describe' }
  ])
const createPost=(newPost)=>{
setPosts([...posts,newPost])
}

 
  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList posts={posts} title='list' />
      <Counter />
    </div>
  );
}

export default App;
