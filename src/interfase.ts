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
}


export interface IShopProp {
    addCart(cartItem: IBasketItem): void
}

export interface ItemListProps extends IShopProp {
    itemData: ICardItem[]
}

export interface IHeaderProp {
    item: IBasketItem[]
}
