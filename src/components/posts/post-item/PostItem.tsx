import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { RxButton } from '../../UI/rx-button/RxButton';
import moment from 'moment';

import './PostItem.scss';

interface PostItemProps {
  post: any;
  remove: any;
  children?: React.ReactNode;
}
const PostItem: FC<PostItemProps> = ({ post, remove }: any): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className="post">
        <div className="post__content">
          <h3 className="post__title">{post.title}</h3>
          <div className="post__author">{post.author}</div>
          <div className="post__description">{post.body}</div>
          <div className="post__created">{moment(post.createdAt).format('MMMM Do YYYY')}</div>
          <div className="post__btns">
            <RxButton
              color="accent"
              onClick={() => navigate(post._id)}
            >
              Open
            </RxButton>
            <div className="post__btns-margin"></div>
            <RxButton color="warn" onClick={() => remove(post)}>Remove</RxButton>
          </div>
        </div>
      </div>
  );
}

export default PostItem;