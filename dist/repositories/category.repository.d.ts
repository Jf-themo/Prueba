import { DefaultCrudRepository } from '@loopback/repository';
import { MysqlDataSource } from '../datasources';
import { Category, CategoryRelations } from '../models';
export declare class CategoryRepository extends DefaultCrudRepository<Category, typeof Category.prototype.Id, CategoryRelations> {
    constructor(dataSource: MysqlDataSource);
}
