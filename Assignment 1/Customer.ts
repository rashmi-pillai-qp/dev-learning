import { CustomerTypeEnum, discountValues } from "./constants";
export class Customer {
    name: string;
    type: string; // "Regular", "Premium", "VIP"
    discount: number;

    constructor(name: string, type: string) {
        this.name = name;
        this.type = type;
        this.setDiscount();
    }

    setDiscount(): void {
        var value = discountValues[CustomerTypeEnum[this.type]]
        if (value)
            this.discount = value;
        else
        this,this.discount = 0;
    }
}