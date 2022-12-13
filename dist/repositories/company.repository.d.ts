import { DefaultCrudRepository } from '@loopback/repository';
import { MysqlDataSource } from '../datasources';
import { Company, CompanyRelations } from '../models';
export declare class CompanyRepository extends DefaultCrudRepository<Company, typeof Company.prototype.Id, CompanyRelations> {
    constructor(dataSource: MysqlDataSource);
}
