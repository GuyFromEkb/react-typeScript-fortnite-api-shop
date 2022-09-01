import { IBasketItem } from './../interfase';
import { useContext } from 'react';
import { AppContext } from '../context/context';

export const useMyContext = () => {
  const { dispatch, state } = useContext(AppContext);

  const setBasketItem = (basketItem: IBasketItem) => {
    dispatch({
      type: 'SET_BASKET_ITEM_AND_TOAST',
      payload: { basketItem: basketItem },
    });
  };
  const removeBasketItem = (id: string) => {
    dispatch({ type: 'REMOVE_BASKET_ITEM', payload: { id: id } });
  };
  const changeBasketItemCount = (id: string, count: number) => {
    dispatch({
      type: 'CHANGE_BASKET_ITEM_COUNT',
      payload: { id: id, count: count },
    });
  };
  const removeToast = () => {
    dispatch({ type: 'REMOVE_TOAST' });
  };

  return {
    ...state,
    setBasketItem,
    removeBasketItem,
    changeBasketItemCount,
    removeToast,
  };
};
