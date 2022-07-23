

import './Item.scss'
import { ICartItemProps } from '../../interfase'




const Item: React.FC<ICartItemProps> = ({ background, displayName, finalPrice, addCart, mainId }) => {


    return (
        <>
            <div className=" col s12 m6 l3  ">
                <div className="card Medium z-depth-3">
                    <div className="card-image">
                        <img src={background} alt={displayName} />

                    </div>
                    <div className="card-content">
                        <span className="item-title">{displayName}</span>
                    </div>
                    <div className="card-action">
                        <button
                            onClick={() => addCart({ finalPrice, displayName, mainId, quantity: 1,background })}
                            className='btn light-blue darken-4'>Купить</button>

                        <div className="card-price">{finalPrice}р</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item

