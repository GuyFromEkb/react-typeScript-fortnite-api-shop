import { useEffect } from 'react';
import './Toast.scss';

export interface IProps {
  name: string;
  clearToast(): void;
}

const Toast: React.FC<IProps> = ({ clearToast, name }) => {
  useEffect(() => {
    const idTimeOutToast = setTimeout(clearToast, 3000);

    return () => clearTimeout(idTimeOutToast);
    // eslint-disable-next-line
  }, [name]);

  return <div className='toast'>{name} добавлен в корзину</div>;
};

export default Toast;
