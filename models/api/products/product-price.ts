import { IProductPrice } from './product-price.interface';

export class ProductPrice implements IProductPrice {
    public buy: number; // Precio de compra
    public sell: number; // Precio de venta

    constructor(price: IProductPrice) {
        this.buy = price.buy;
        this.sell = price.sell;
    }
}
