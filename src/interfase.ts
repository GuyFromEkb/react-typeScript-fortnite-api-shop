export interface ICardItem {
  mainId: string;
  displayName: string;
  background: string;
  finalPrice: number;
}
export interface IBasketItem {
  mainId: string;
  displayName: string;
  finalPrice: number;
  quantity: number;
  background: string;
}

export interface ItemListProps {
  itemData: ICardItem[];
}
