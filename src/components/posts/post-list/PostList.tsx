import { FC } from 'react';
import PostItem from '../post-item/PostItem';
import { Post } from '../post';

import './PostList.scss';

interface PostListProps {
  posts: Post[];
  remove: (post: Post) => void;
  title?: string;
  children?: React.ReactNode;
}

export const PostList: FC<PostListProps> = ({ posts, title, remove }: PostListProps): JSX.Element => {

  return (
    posts && posts.length 
    ? <div className="posts__list">
        <h1 className="posts__title">{title}</h1>
        { posts.map((post: Post) => {
          return (
            <PostItem
                key={post._id}
                post={post}
                remove={remove}
            />
          )
          })
        }
      </div>
    : <div className="posts__not">Posts not found <span>&#128533;</span></div>
  );
}