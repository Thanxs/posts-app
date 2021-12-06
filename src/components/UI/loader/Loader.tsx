import { FC } from 'react';
import cls from './Loader.module.scss';

const Loader: FC = (): JSX.Element => {
  return (
    <div className={cls.ldsFacebook}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Loader;