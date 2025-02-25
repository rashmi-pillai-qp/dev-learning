import { discountValues } from "../constants";
import { CustomerTypeEnum } from "../constants";

export function     getDiscount(type):number {
    var value = discountValues[CustomerTypeEnum[type]]
    return value || 0;
}