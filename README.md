# DataBase Query Tools

Use TypeOrm and support more databases and configurations.

Supports MySQL, MS SQL Server, Oracle, Sybase, PostgreSQL, MariaDB, SQLite, SAP Hana, WebSQL databases. 

## Installation

* Install the npm package

​	`pnpm install query-tools`

* Install a database driver

  * for MySQL or MariaDB

    `npm install mysql --save` (you can install `mysql2` instead as well)`

  * more database see [typeorm](https://github.com/typeorm/typeorm)

## Quick Start

### Creating a new DataSoure

```js
// cjs
const { createDataSource } = require('query-tools/lib');
```

```js
// esm
import { createDataSource } from 'query-tools/dist';
```

```js
// use datesource
const dataSource = createDataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'test'
});

;(async () => {
  await dataSource.initialize();

  const ans = await dataSource.query('select * from test');

  console.log(ans);
  
  await dataSource.destroy();
})();
```

### Use SQL Server 2000

。。。

