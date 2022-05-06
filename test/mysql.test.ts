import { DataSource } from 'typeorm';
import { createDataSource } from '../src/index'

describe('mysql', () => {
  let datasource: DataSource;

  beforeAll(async () => {
    datasource = createDataSource({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'test'
    });
  })

  afterAll(async () => {
    await datasource.destroy();
  })

  it('should initialize', async () => {
    const ret = await datasource.initialize();
    expect(ret).toEqual(datasource);
  });

  it('shold delete table test', async () => {
    const ret = await datasource.query('drop table if exists test');
    expect(ret).not.toBeNull();
  })

  it('should create table test', async () => {
    const ret = await datasource.query('create table test(id int, text varchar(20)) character set utf8;');
    expect(ret).not.toBeNull();
  })

  it('should insert data into table', async () => {
    const ret = await datasource.query('insert into test(id, text) values(1, "hello sql tools")');
    expect(ret).not.toBeNull();
  });
})
