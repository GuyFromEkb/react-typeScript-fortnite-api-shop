import React from 'react';
import { useState } from 'react';

import { IBasketItem } from '../../interfase';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Shop from '../shop/Shop';
import Cart from '../cart/Cart';
import Toast from '../toast/Toast';

import './App.scss'

const App: React.FC = () => {

	const [cartItem, setCartItem] = useState<IBasketItem[]>([])
	const [showCart, setShowCart] = useState<boolean>(false)
	const [toastName, setToastName] = useState<string>('')

	const onAddCartItem = (item: IBasketItem): void => {

		const chekId = cartItem.findIndex(currentItem => currentItem.mainId === item.mainId)

		if (chekId === -1)
			setCartItem(prev => [...prev, item])
		else {
			const AddQuantity = cartItem.map((item, index) => {
				return index === chekId ? { ...item, quantity: item.quantity + 1 } : item
			})

			setCartItem(AddQuantity)
		}
		setToastName(item.displayName)
	}
	const onChangeCartItemCounter = (n: number, id: string) => {

		setCartItem(prev => prev.map(item => {
			if (item.mainId === id) {
				return item.quantity + n !== 0 ? { ...item, quantity: item.quantity + n } : item
			}
			return item
		}))
	}
	const onDeleteCartItem = (id: string) => {
		setCartItem(prev => prev.filter(item => item.mainId !== id))
	}
	const onShowCart = () => {
		setShowCart(prev => !prev)
	}
	const clearToast = () => {
		setToastName('')
	}

	return (
		<>
			<Header showCart={onShowCart} item={cartItem} />
			<main>
				<button onClick={clearToast}>tst</button>
				<Shop addCart={onAddCartItem} />
				{showCart && <Cart deleteItem={onDeleteCartItem} changeCounter={onChangeCartItemCounter} items={cartItem} show={onShowCart} />}
				{toastName && <Toast clearToast={clearToast} name={toastName} /> }
			</main>
			<Footer />
		</>
	)
}

export default App
