const { Pool } = require("pg");
exports.pool = new Pool({
  user: "postgres",
  password: "C0cacola0",
  database: "stu8",
  host: "localhost",
  port: 5432,
});
