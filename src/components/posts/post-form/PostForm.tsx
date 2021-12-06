import { FC, useState } from 'react';
import { RxInput } from '../../UI/rx-input/RxInput';
import { RxButton } from '../../UI/rx-button/RxButton';

import './PostForm.scss';

interface PostFormProps {
  create: any;
  children?: React.ReactNode;
}

export const PostForm: FC<PostFormProps> = ({ create }: any): JSX.Element => {
  const [post, setPost] = useState({ title: '', body: '', author: '', picture: '' });

  const addPost = (e: any) => {
    e.preventDefault();
    create(post);
    setPost({ title: '', body: '', author: '', picture: '' })
  }

  //TODO: add file loading on server

  // const addFile = (e: any) => {
  //   const reader = new FileReader();
  //   const files = e.target.files;

  //   const file = files[0];

  //   reader.readAsDataURL(file);
    
  //   reader.addEventListener('load', (event: any) => {
  //     console.log(event.target.result);
  //     // setPost({ ...post, picture: e.target.value })
  //     setPost({ ...post, picture: e.target.result })
  //   });
  // }

  return (
    <form className="post__form">
        <RxInput
          value={post.title}
          onChange={(e: any) => setPost({ ...post, title: e.target.value })}
          type="text" placeholder="post title" />
        <RxInput
          value={post.body}
          onChange={(e: any) => setPost({ ...post, body: e.target.value })}
          inputtype="textarea"
          placeholder="post description" />
        <RxInput
          value={post.author}
          onChange={(e: any) => setPost({ ...post, author: e.target.value })}
          type="text" placeholder="author" />
        {/* <RxInput
          value={post.picture}
          onChange={addFile}
          type="file" placeholder="picture" /> */}
        <RxButton color="accent" onClick={addPost}>
          Create post
        </RxButton>
      </form>
  );
}