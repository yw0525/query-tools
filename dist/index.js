import{DataSource as t}from"typeorm";const e=e=>{const{type:o}=e;return new t("mssql-2000"===o?{...e,type:"mssql"}:e)};export{e as createDataSource};
