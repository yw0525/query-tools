import { SqlServerConnectionCredentialsOptions, SqlServerConnectionCredentialsAuthenticationOptions } from "typeorm/driver/sqlserver/SqlServerConnectionCredentialsOptions";
export declare type MsSql2000ConnectionCredentialsAuthenticationOptions = SqlServerConnectionCredentialsAuthenticationOptions;
/**
 * SqlServer 2000 specific connection credential options.
 */
export default interface MsSql2000ConnectionCredentialsOptions extends SqlServerConnectionCredentialsOptions {
}
