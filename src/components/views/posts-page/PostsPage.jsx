import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../../store/posts/postsActions';
import Spinner from '../../Spinner';
import Post from './Post';

// Component that renders the page "Posts", composed of smaller components
export default function PostsPage() {
  // React-Redux hooks that enable this component to interact with store
  const dispatch = useDispatch();
  const {posts, loading, hasErrors} = useSelector((state => state.posts));

  // This hook will be ran each time the component is mounted
  useEffect(() => {
    dispatch(fetchPosts())

    // This optional part of useEffect hook is ran each time the component is unmounted
    return () => {
      console.log('Unmounted');
    }
  }, [dispatch]);

  // Function that maps through all fetched posts-data and returns Post-components with a single 
  // post passed in them as props
  function renderPosts() {   
    return posts.map((post) => <Post key={post.id} post={post} />)
  }

  return (
    <div className='container'>
      <h2>Posts</h2>
      { hasErrors && <div>Error in loading data!</div> }
      { // Conditional rendering depending on the state of the app
        loading 
        ? <Spinner />
        : (!hasErrors 
          ? renderPosts()
          : null )
      }
    </div>
  )
}