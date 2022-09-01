import { IBasketItem } from '../interfase';

export type ACTIONTYPE =
  | { type: 'SET_BASKET_ITEM_AND_TOAST'; payload: { basketItem: IBasketItem } }
  | { type: 'CHANGE_BASKET_ITEM_COUNT'; payload: { id: string; count: number } }
  | { type: 'REMOVE_BASKET_ITEM'; payload: { id: string } }
  | { type: 'REMOVE_TOAST' };

export interface IinitialState {
  basketItem: IBasketItem[];
  toast: string;
}

export const myReducer = (
  state: IinitialState,
  action: ACTIONTYPE
): IinitialState => {
  switch (action.type) {
    case 'SET_BASKET_ITEM_AND_TOAST': {
      const chekId = state.basketItem.findIndex(
        (currentItem) => currentItem.mainId === action.payload.basketItem.mainId
      );
      if (chekId === -1) {
        return {
          ...state,
          toast: action.payload.basketItem.displayName,
          basketItem: [...state.basketItem, action.payload.basketItem],
        };
      } else {
        const AddQuantity = state.basketItem.map((item, index) => {
          return index === chekId
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
        return {
          ...state,
          toast: action.payload.basketItem.displayName,
          basketItem: AddQuantity,
        };
      }
    }
    case 'REMOVE_BASKET_ITEM': {
      return {
        ...state,
        basketItem: state.basketItem.filter(
          (item) => item.mainId !== action.payload.id
        ),
      };
    }
    case 'CHANGE_BASKET_ITEM_COUNT': {
      const buff = state.basketItem.map((item) => {
        if (item.mainId === action.payload.id) {
          return item.quantity + action.payload.count > 0
            ? { ...item, quantity: item.quantity + action.payload.count }
            : item;
        }
        return item;
      });
      return { ...state, basketItem: buff };
    }
    case 'REMOVE_TOAST': {
      return { ...state, toast: '' };
    }
    default:
      return state;
  }
};
