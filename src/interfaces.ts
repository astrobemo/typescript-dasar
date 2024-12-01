export interface Seller {
    name: string;
    nameOfShop: string;
    readonly governmentId: string;
}

export interface Employee{
    name: string;
    id: number;
    department: string;
}

export interface Manager extends Employee{
    numberOfEmployees: number;
}