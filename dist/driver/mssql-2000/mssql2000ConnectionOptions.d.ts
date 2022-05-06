import { BaseDataSourceOptions } from "../../data-source/BaseDataSourceOptions";
import { SqlServerConnectionCredentialsOptions } from "typeorm/driver/sqlserver/SqlServerConnectionCredentialsOptions";
/**
 * Microsoft Sql Server 2000 specific connection options.
 */
export interface MsSql2000ConnectionOptions extends BaseDataSourceOptions, SqlServerConnectionCredentialsOptions {
    /**
     * Database type.
     */
    readonly type: "mssql-2000";
}
