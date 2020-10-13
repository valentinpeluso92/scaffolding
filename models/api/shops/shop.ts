import { IShop } from './shop.interface';

export class Shop implements IShop {
    public id: string;
    public name: string;
    public address: string;

    constructor(shop: IShop) {
        this.id = shop.id;
        this.name = shop.name;
        this.address = shop.address;
    }
}
