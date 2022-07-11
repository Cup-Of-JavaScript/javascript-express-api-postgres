const { Pool } = require("pg");

exports.pool = new Pool({
    user: "postgres",
    password: "Ihgdp51505150!",
    database: "stu0",
    host: "localhost",
    port: 5432,
  });
