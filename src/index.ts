import { DataSourceOptions, DataSource } from 'typeorm';
import { MsSql2000ConnectionOptions } from './driver/mssql-2000/mssql2000ConnectionOptions';

type QueryToolsOptions = DataSourceOptions | MsSql2000ConnectionOptions;

class QueryTools {
  createConnection (options: QueryToolsOptions) {
    const { type } = options;

    switch (type) {
      case 'mssql-2000':
        return new Promise((resolve, reject) => {
        });
      default:
        return new DataSource(options);
    }
  }
}

export default QueryTools;
