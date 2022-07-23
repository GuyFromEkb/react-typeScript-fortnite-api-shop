
import CartItem from '../cartItem/CartItem'
import { ICartProp } from '../../interfase'
import './Cart.scss'

const Cart: React.FC<ICartProp> = ({ show, items, deleteItem, changeCounter }) => {


    // const totalCost = items.reduce((acc, item) => {
    //     return acc += item.quantity * item.finalPrice
    // }, 0)

    const totalCost = items.reduce((acc, item) => acc+= item.quantity * item.finalPrice, 0)

    const emptyCart = items.length === 0 ? <div className='alert'>Корзина Пуста</div> : null
    return (

        <div className="cart-modal">
            <div onClick={show} className="cart-modal__close"><i className="material-icons">close</i></div>
            {
                emptyCart ||
                <>
                    <ul className="cart-list collection">
                        {items.map(item => <CartItem changeCounter={changeCounter} deleteItem={deleteItem} key={item.mainId} item={item} />)}

                    </ul>
                    <div className="cart-modal__cost">Итоговая стоимость: <span>{totalCost.toLocaleString()}</span> рублей</div>
                </>
            }

        </div>
    )
}

export default Cart