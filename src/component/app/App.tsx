import React from 'react';
import { useState } from 'react';

import { IBasketItem } from '../../interfase';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Shop from '../shop/Shop';

import './App.scss'

const App: React.FC = () => {

	const [cartItem, setCartItem] = useState<IBasketItem[]>([])

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



	}

	return (
		<>
			<Header item={cartItem} />
			<Shop addCart={onAddCartItem} />
			<Footer />
		</>
	)
}

export default App
