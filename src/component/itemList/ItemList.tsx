import { useState } from 'react'

import Item from '../Item/Item'

import { ItemListProps } from '../../interfase'
import './ItemList.scss'



const ItemList: React.FC<ItemListProps> = ({addCart,itemData}) => {

    const [renderItems, setRenderItems] = useState<number>(12)
    const renderData = itemData.slice(0, renderItems)


    const OnShowMore = () => {
        setRenderItems(prev => prev + 12)
    }


    return (
        <>
            <div className="item-list">
                {
                    renderData.map(item => <Item addCart={addCart}  key={item.mainId} {...item} />)
                }
            </div>
            <button onClick={OnShowMore} className='btn-more btn light-blue darken-4'>SHOW ME MORE</button>
        </>
    )
}

export default ItemList









