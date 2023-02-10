import './styles/App.css'
import { useEffect, useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MYButton from './components/UI/button/MYButton';
import { usePosts } from './hook/usePosts';
import PostService from './API/PostService';
import Loader from './components/UI/Loader/Loader';
import { useFetching } from './hook/useFetching';


function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [fetchPost,isPostLoading,postError]=useFetching(async()=>{
    const posts = await PostService.getAll();
    setPosts(posts)
  })

  useEffect(() => {
    fetchPost()
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

 

  

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  return (
    <div className="App">
      <MYButton onClick={() => setModal(true)}>
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
      {postError &&
      <h1>Error${postError}</h1>
      }
      {isPostLoading
        ? <div style={{display:'flex', justifyContent:'center', marginTop:50}}><Loader/></div>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title='list' />
      }
    </div>
  );
}

export default App;
