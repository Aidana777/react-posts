import './styles/App.css'
import { useMemo, useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MYButton from './components/UI/button/MYButton';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'javaStript', body: 'describe' }
  ])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal,setModal]=useState(false)

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
    setModal(false)

  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }



  return (
    <div className="App">
      <MYButton onClick={()=>setModal(true)}>
        Create User
      </MYButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>


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
