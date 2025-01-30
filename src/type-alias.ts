// this is example alias on union type
export type ID = string | number;

export type Category = {
    id: ID;
    name: string;
    description?: string;
}

export type Product = {
    id: ID;
    name: string;
    price: number;
    category: Category;
}

export type Order = {
    id: ID;
    products: Product[];
    total: number;
}