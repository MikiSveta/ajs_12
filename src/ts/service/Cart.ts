import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    sum(): number {
        let result = this._items.reduce(function(sum, current) {
            return sum + current.price;
        }, 0);

        return result;
    }

    discount(amount: number): number {
        return this.sum() - this.sum() * amount/100;
    }

    delete(remodeId: number): void {
       this._items.splice(this._items.findIndex(item => item.id === remodeId),1);
    }
}