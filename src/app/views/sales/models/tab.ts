import { Sale } from '../../../../../models/api/sales/sale';

export class Tab {
    constructor(public name: string, public sales: Sale[]) {}
}
