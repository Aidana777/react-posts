import './styles/app.css'
import { useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/MySelect';
import MyInput from './components/UI/input/MyInput';
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'javaStript', body: 'describe' }
  ])

  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuuery] = useState('')
  const sortedPosts=[...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);

  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <div>
        <hr style={{ margin: '15px 0' }} />
        <MyInput
          placeholder='search'
          value={searchQuery}
          onChange={e => setSearchQuuery(e.target.value)}
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue='Sort'
          options={[
            { value: 'title', name: 'Name' },
            { value: 'body', name: 'Description' },
          ]}
        />
      </div>
      {posts.length !== 0
        ? <PostList remove={removePost} posts={sortPosts} title='list' />
        : <h1 style={{ textAlign: 'center' }}>Post not found</h1>
      }

    </div>
  );
}

export default App;
