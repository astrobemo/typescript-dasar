export enum CustomerType {
    INDIVIDUAL,
    COMPANY
}

export type Customer = {
    name: string;
    type: CustomerType;
}

export enum ItemType {
    BULK = 'BULK',
    RETAIL = 'RETAIL'
}

export type Item = {
    name: string;
    type: ItemType;
}