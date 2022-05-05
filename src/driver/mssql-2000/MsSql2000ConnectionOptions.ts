import {SqlServerConnectionOptions} from "typeorm/driver/sqlserver/SqlServerConnectionOptions";

/**
 * Microsoft Sql Server 2000 specific connection options.
 */
export interface MsSql2000ConnectionOptions extends SqlServerConnectionOptions {
  /**
   * Database type.
   */
  readonly type: "mssql-2000"
}