import { useMyContext } from '../../hook/useMyContext';
import { IBasketItem } from '../../interfase';
import './CartItem.scss';

const CartItem: React.FC<IBasketItem> = ({
  background,
  displayName,
  finalPrice,
  mainId,
  quantity,
}) => {
  const { removeBasketItem, changeBasketItemCount } = useMyContext();

  return (
    <>
      <li className='cart-item collection-item avatar'>
        <img src={background} alt={displayName} className='circle' />
        <span className='title'>{displayName}</span>
        <div
          onClick={() => removeBasketItem(mainId)}
          className='secondary-content'
        >
          <i className=' material-icons'>delete_forever</i>
        </div>
        <div className='counter'>
          <button onClick={() => changeBasketItemCount(mainId, -1)}>-</button>

          <div className='counter__quantity'>{quantity}</div>
          <button onClick={() => changeBasketItemCount(mainId, +1)}>+</button>
        </div>
        <div className='final-price'>{quantity * finalPrice}</div>
      </li>
    </>
  );
};

export default CartItem;
