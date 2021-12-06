import React, { FC } from 'react';
import cls from './RxInput.module.scss';

interface RxInputProps {
  children?: React.ReactNode;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: any) => void;
  inputtype?: string;
}

export const RxInput: FC<RxInputProps> = (props): JSX.Element => {
  return (
    <>
      {
        props.inputtype === 'textarea' ? 
        <textarea rows={10} className={cls.rxInput} {...props}></textarea>
        : <input className={cls.rxInput} {...props} />
      }
    </>    
  )
}