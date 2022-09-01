import { FC } from 'react';
import { useMyContext } from '../../hook/useMyContext';
import './Header.scss';
interface IProps {
  showCart(): void;
}

const Header: React.FC<IProps> = ({ showCart }) => {
  const { basketItem } = useMyContext();

  return (
    <header>
      <nav>
        <div className='nav-wrapper light-blue darken-4 p1x'>
          <a href='/' className='brand-logo'>
            Fortnite shop
          </a>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li>
              <CartItem showCart={showCart} count={basketItem.length} />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

interface ICartItemProps {
  showCart(): void;
  count: number;
}
const CartItem: FC<ICartItemProps> = ({ showCart, count }) => {
  return (
    <div onClick={showCart} className='cart-wrap'>
      <p>Корзина</p>
      <i className='material-icons '>shopping_cart</i>
      {count > 0 && (
        <span className='light-blue darken-3 z-depth-1'>{count}</span>
      )}
    </div>
  );
};
