import { useState } from 'react';
import Item from '../Item/Item';
import { ItemListProps } from '../../interfase';
import './ItemList.scss';

const ItemList: React.FC<ItemListProps> = ({ itemData }) => {
  const [renderItems, setRenderItems] = useState<number>(12);
  const renderData = itemData.slice(0, renderItems);

  const OnShowMore = () => {
    setRenderItems((prev) => prev + 12);
  };

  return (
    <>
      <div className='item-list'>
        {renderData.map((item) => (
          <Item key={item.mainId} {...item} />
        ))}
      </div>
      <button
        disabled={itemData.length <= renderItems ? true : false}
        onClick={OnShowMore}
        className='btn-more btn light-blue darken-4'
      >
        {itemData.length <= renderItems
          ? 'Ежедневные акции закончились :('
          : 'ещё!'}
      </button>
    </>
  );
};

export default ItemList;
