import { ConnectionOptions, createConnection: createConn } from 'typeorm';
import { MsSql2000ConnectionOptions } from './driver/mssql-2000/mssql2000ConnectionOptions';

export type QueryToolsOptions = ConnectionOptions | MsSql2000ConnectionOptions;

export default class QueryTools {
  createConnection (options: QueryToolsOptions) {
    const { type } = options;

    switch (type) {
      case 'mssql-2000':
        const sql = require("mssql");

        return new Promise((resolve, reject) => {
          
        });
        break;
      default:
        return createConn(options);
    }
  }
}