import { Entity } from '@loopback/repository';
export declare class Category extends Entity {
    Id?: number;
    Code: string;
    Name: string;
    Descrp: string;
    Status: boolean;
    constructor(data?: Partial<Category>);
}
export interface CategoryRelations {
}
export declare type CategoryWithRelations = Category & CategoryRelations;
