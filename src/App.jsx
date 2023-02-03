import './styles/app.css'
import { useMemo, useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'javaStript', body: 'describe' }
  ])
const [filter, setFilter]=useState({sort:'',query:''})
  const sortedPosts = useMemo(() => {
    console.log('done');
    if (filter.sort) {

      [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  }, [filter.sort, posts])
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLocaleLowerCase().includes(filter.query.toLocaleLowerCase()))
  }, [filter.query, sortedPosts])


  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }



  return (
    <div className="App">
      <PostForm create={createPost} />
      <div>
        <hr style={{ margin: '15px 0' }} />
     <PostFilter 
     filter={filter}
     setFilter={setFilter}
     />
      </div>
      {sortedAndSearchedPosts.length !== 0
        ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title='list' />
        : <h1 style={{ textAlign: 'center' }}>Post not found</h1>
      }

    </div>
  );
}

export default App;
