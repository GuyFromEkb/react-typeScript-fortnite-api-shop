import { useEffect, useState } from 'react';
import { useMyContext } from '../../hook/useMyContext';

import ItemList from '../itemList/ItemList';
import Toast from '../toast/Toast';

import { ICardItem } from '../../interfase';
import './Shop.scss';

const Shop: React.FC = () => {
  const [goods, setGoods] = useState<ICardItem[]>([]);
  const { toast, removeToast } = useMyContext();

  useEffect(() => {
    fetch('https://fortniteapi.io/v2/shop?lang=ru', {
      headers: { Authorization: '2a53518a-363ccb52-6f3c7c37-5f86ea71' },
    })
      .then((responce) => responce.json())
      .then((data) => {
        const transformData = [...data.shop].map(
          ({ mainId, displayName, displayAssets, price: { finalPrice } }) => {
            const bg = displayAssets['0']['background'];
            return { mainId, displayName, finalPrice, background: bg };
          }
        );
        setGoods(transformData);
      });
  }, []);

  return (
    <>
      <div className='container'>
        {goods.length === 0 ? <Preloader /> : <ItemList itemData={goods} />}
      </div>
      {toast && <Toast name={toast} clearToast={removeToast} />}
    </>
  );
};

export default Shop;

export const Preloader = () => {
  return (
    <div className='progress  light-blue '>
      <div className='indeterminate light-blue darken-3'></div>
    </div>
  );
};
