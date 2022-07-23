
import { IHeaderProp } from '../../interfase'

import './Header.scss'

const Header: React.FC<IHeaderProp> = ({ item, showCart }) => {



    const cartItem =
        <div
            onClick={showCart}
            className="cart-wrap">
            <p>Корзина</p>
            <i className="material-icons ">shopping_cart</i>
            {item.length > 0 && <span className='light-blue darken-3 z-depth-1' >{item.length}</span>}

        </div>

    return (
        <header>
            <nav>
                <div className="nav-wrapper light-blue darken-4 p1x">
                    <a href="/" className="brand-logo">React-TypeScript Shop</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>{cartItem}</li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header

