import { FC, useEffect, useState } from 'react';
import { Post } from '../posts/post';
import { usePosts } from '../../hooks/usePosts';
import { useFetching } from '../../hooks/useFetching';
import PostsService from '../../services/PostService';
import { RxButton } from '../UI/rx-button/RxButton';
import RxModal from '../UI/rx-modal/RxModal';
import { PostForm } from '../posts/post-form/PostForm';
import PostFilter from '../posts/post-filter/PostFilter';
import Loader from '../UI/loader/Loader';
import { PostList } from '../posts/post-list/PostList';

import './Posts.scss';

export type Sort = 'title' | 'body' | 'author';

const Posts: FC = (): JSX.Element => {
  const [posts, setPosts] = useState([]) as any; // TODO

  const [filter, setFilter] = useState({
    sort: '',
    query: ''
  });

  const [modal, setModal] = useState(false);

  const sortedAndSearchedPosts: Post[] = usePosts(posts, (filter.sort as Sort), filter.query);

  const [fetchPosts, loading, error] = useFetching(async (): Promise<void> => {
    const posts: Post[] = await PostsService.getAllPosts();
    setPosts(posts);
  }) as any; //TODO

  useEffect((): void => {
    fetchPosts();
  }, []);

  const createPost = async (post: Post): Promise<void> => {
    const data = await PostsService.createPost(post);
    
    setPosts([...posts, data]);
    setModal(false);
  };

  const removePost = async (post: Post): Promise<void> => {
    const deletedPost = await PostsService.deletePost(post._id);
    setPosts([...posts.filter((item: Post): boolean => item._id !== deletedPost._id)]);
  }

  const fetchTestPosts = async (): Promise<void> => {
    const data: Post[] = await PostsService.fetchTestPosts();

    setPosts(data);
  }

  return (
    <div className="posts">
      <RxModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </RxModal>
      <div className="posts__fetch">
        <RxButton
          disabled={posts.length}
          color="primary"
          onClick={fetchTestPosts}>
            Fetch test posts
        </RxButton>
      </div>
      <div className="posts__filter">
        <PostFilter filter={filter} setFilter={setFilter} />
      </div>
      <div className="posts__create">
        <RxButton onClick={() => setModal(true)}>Create Post</RxButton>
      </div>
      {
        error && <div>{error}</div>
      }
      {
        loading
        ? <div className="posts__loader"><Loader /></div>
        : <PostList
            remove={removePost}
            posts={sortedAndSearchedPosts}
            title="JS POSTS"
          />
      }
    </div>
  );
}

export default Posts;
