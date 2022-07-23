
import { IBasketProp } from '../../interfase'
import './CartItem.scss'

const CartItem: React.FC<IBasketProp> = ({ item, changeCounter, deleteItem }) => {
    const { background, displayName, finalPrice, mainId, quantity } = item
    return (
        <>
            <li className="cart-item collection-item avatar">
                <img src={background} alt={displayName} className="circle" />
                <span className="title">{displayName}</span>
                <div onClick={() => deleteItem(mainId)} className="secondary-content">
                    <i className=" material-icons">delete_forever</i>
                </div>
                <div className="counter">
                    <button onClick={() => changeCounter(-1, mainId)} >-</button>
                    <div className="counter__quantity">{quantity}</div>
                    <button onClick={() => changeCounter(+1, mainId)} >+</button>
                </div>
                <div className="final-price">{quantity * finalPrice}</div>
            </li>
        </>
    )
}

export default CartItem