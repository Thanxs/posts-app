import React, { FC } from 'react';
import cls from './RxButton.module.scss';
import { COLORS } from '../../../shared/colors';

interface RxButtonProps {
  color?: string;
  children?: React.ReactNode;
  onClick?: (e: any) => void;
  disabled?: boolean;
}

export const RxButton: FC<RxButtonProps> = ({ children, color, ...props }): JSX.Element => {

  let colorValue = color;

  if (colorValue && colorValue in COLORS) {
    colorValue = COLORS[colorValue];
  }

  return (
    <button
      {...props}
      style={{ background : props.disabled ?  '#ddd' : colorValue }}
      className={cls.rxButton}
    >
      {children}
    </button>
  )
}