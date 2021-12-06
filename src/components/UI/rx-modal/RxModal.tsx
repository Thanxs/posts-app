import { FC } from 'react';
import cls from './RxModal.module.scss';

interface RxModalProps {
  children: React.ReactNode;
  visible: boolean;
  setVisible?: any;
}

const RxModal: FC<RxModalProps> = ({ children, visible, setVisible }): JSX.Element => {
    const rootClasses = [cls.rxModal];

    if (visible) {
      rootClasses.push(cls.active);
    }

    return (
      <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
        <div className={cls.rxModal__content} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    )
};

export default RxModal;