import { Entity } from '@loopback/repository';
export declare class Company extends Entity {
    Id?: number;
    Name: string;
    Address: string;
    constructor(data?: Partial<Company>);
}
export interface CompanyRelations {
}
export declare type CompanyWithRelations = Company & CompanyRelations;
