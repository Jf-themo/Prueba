import { Entity } from '@loopback/repository';
export declare class Products extends Entity {
    Id?: number;
    Code: string;
    Descr: string;
    Label: string;
    Category: string;
    Quantity: string;
    Price: number;
    IdCompany: number;
    constructor(data?: Partial<Products>);
}
export interface ProductsRelations {
}
export declare type ProductsWithRelations = Products & ProductsRelations;
