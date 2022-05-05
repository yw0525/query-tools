"use strict";var e=require("typeorm");module.exports=class{createConnection(r){const{type:t}=r;return"mssql-2000"===t?new Promise(((e,r)=>{})):new e.DataSource(r)}};
