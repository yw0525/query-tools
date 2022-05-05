import { DataSourceOptions, DataSource } from 'typeorm';
import { MsSql2000ConnectionOptions } from './driver/mssql-2000/mssql2000ConnectionOptions';
declare type QueryToolsOptions = DataSourceOptions | MsSql2000ConnectionOptions;
declare class QueryTools {
    createConnection(options: QueryToolsOptions): Promise<unknown> | DataSource;
}
export default QueryTools;
