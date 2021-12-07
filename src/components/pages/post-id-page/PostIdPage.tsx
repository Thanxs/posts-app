import { FC, useEffect, useState } from 'react';
import { useParams, Params} from 'react-router-dom';
import { useFetching } from '../../../hooks/useFetching';
import { Post } from '../../posts/post';
import PostsService from '../../../services/PostService';
import Loader from '../../UI/loader/Loader';
import moment from 'moment';

import './PostIdPage.scss';

const PostIdPage: FC = (): JSX.Element => {
  const params: Readonly<Params<string>> = useParams();
  const [post, setPost] = useState<Post>({ title: '', author: '', body: '', _id: '', picture: '' }); //TODO
  const [imageSrc, setImageSrc] = useState<string>('');

  const [fetchPostById, isLoading] = useFetching(async () => {
    const fetchedPost: Post = await PostsService.getPostById(params.id as string);
    setImageSrc(PostsService.fetchImage(fetchedPost));
    setPost(fetchedPost);
  }) as any; //TODO

  useEffect(() => {
    fetchPostById();
  }, []); //TODO

  return (
    <div className="post-page">
      {
        isLoading
        ? <div className="post-page__loader"><Loader /></div>
        : <>
            <h2 className="post-page__title">{post.title}</h2>
            <div className="post-page__author">{post.author}</div>
            <div className="post-page__description">{post.body}</div>
            <div className="post-page__image">
              {/* { imageSrc && <img src={imageSrc} alt="post-img" width="350" /> } */}
            </div>
            <div className="post-page__created">{moment(post.createdAt).format('MMMM Do YYYY')}</div>
        </>
      }
    </div>
  );
}

export default PostIdPage;