
import CartItem from '../cartItem/CartItem'
import { ICartProp } from '../../interfase'
import './Cart.scss'

const Cart: React.FC<ICartProp> = ({ show, items, deleteItem, changeCounter }) => {



    const emptyCart = items.length === 0 ? <h1>Корзина Пуста</h1> : null
    return (

        <div className="cart-modal">
            <div onClick={show} className="cart-modal__close"><i className="material-icons">close</i></div>
            {
                emptyCart ||
                <ul className="cart-list collection">
                    {items.map(item => <CartItem changeCounter={changeCounter} deleteItem={deleteItem} key={item.mainId} item={item} />)}
                </ul>
            }

        </div>
    )
}

export default Cart