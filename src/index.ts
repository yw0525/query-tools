import { DataSourceOptions, DataSource } from 'typeorm';
import { MsSql2000ConnectionOptions } from './driver/mssql-2000/mssql2000ConnectionOptions';

type QueryToolsOptions = DataSourceOptions | MsSql2000ConnectionOptions;

export const createDataSource = (options: QueryToolsOptions): DataSource => {
  const { type } = options;

  switch (type) {
    case 'mssql-2000':
      return new DataSource({
        ...options,
        type: 'mssql'
      });
    default:
      return new DataSource(options);
  }
}
