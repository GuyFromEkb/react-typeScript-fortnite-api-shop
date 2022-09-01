import './Item.scss';
import { ICardItem } from '../../interfase';
import { useMyContext } from '../../hook/useMyContext';

const Item: React.FC<ICardItem> = (props) => {
  const { setBasketItem } = useMyContext();

  return (
    <>
      <div className=' col s12 m6 l3  '>
        <div className='card Medium z-depth-3'>
          <div className='card-image'>
            <img src={props.background} alt={props.displayName} />
          </div>
          <div className='card-content'>
            <span className='item-title'>{props.displayName}</span>
          </div>
          <div className='card-action'>
            <button
              onClick={() => setBasketItem({ ...props, quantity: 1 })}
              className='btn light-blue darken-4'
            >
              Купить
            </button>

            <div className='card-price'>{props.finalPrice}р</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
