import {Pool, Client} from "pg";

export const connectionPool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "ro1506xbj16",
    port: 5432
});

