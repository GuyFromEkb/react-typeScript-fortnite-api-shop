export interface ICartItemProps extends ICardItem, IShopProp { }

export interface ICardItem {
    mainId: string
    displayName: string
    background: string
    finalPrice: number
}
export interface IBasketItem {
    mainId: string
    displayName: string
    finalPrice: number
    quantity: number
    background: string
}
export interface IBasketProp {
    item: IBasketItem,
    changeCounter(n: number, id: string): void
    deleteItem(id: string): void
}


export interface IShopProp {
    addCart(cartItem: IBasketItem): void
}

export interface ICartProp {
    items: IBasketItem[]
    show(): void
    changeCounter(n: number, id: string): void
    deleteItem(id: string): void

}

export interface ItemListProps extends IShopProp {
    itemData: ICardItem[]
}

export interface IHeaderProp {
    showCart(): void
    item: IBasketItem[]
}
