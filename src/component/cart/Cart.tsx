import { useMyContext } from '../../hook/useMyContext';
import CartItem from '../cartItem/CartItem';
import './Cart.scss';

export interface IProps {
  show(): void;
}

const Cart: React.FC<IProps> = ({ show }) => {
  const { basketItem } = useMyContext();

  const totalCost = basketItem.reduce(
    (acc, item) => (acc += item.quantity * item.finalPrice),
    0
  );

  const emptyCart =
    basketItem.length === 0 ? <div className='alert'>Корзина Пуста</div> : null;
  return (
    <div className='cart-modal'>
      <div onClick={show} className='cart-modal__close'>
        <i className='material-icons'>close</i>
      </div>
      {emptyCart || (
        <>
          <ul className='cart-list collection'>
            {basketItem.map((item) => (
              <CartItem {...item} key={item.mainId} />
            ))}
          </ul>
          <div className='cart-modal__cost'>
            Итоговая стоимость: <span>{totalCost.toLocaleString()}</span> рублей
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
