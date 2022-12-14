import { DefaultCrudRepository } from '@loopback/repository';
import { MysqlDataSource } from '../datasources';
import { Products, ProductsRelations } from '../models';
export declare class ProductsRepository extends DefaultCrudRepository<Products, typeof Products.prototype.Id, ProductsRelations> {
    constructor(dataSource: MysqlDataSource);
}
