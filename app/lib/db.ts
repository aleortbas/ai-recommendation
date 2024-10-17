import { Pool } from "pg";

let conn: Pool | null = null;

function getConnection(): Pool {
    if (!conn) {
        conn = new Pool({
            user: process.env.PGSQL_USER,
            password: process.env.PGSQL_PASSWORD,
            host: process.env.PGSQL_HOST,
            port: Number(process.env.PGSQL_PORT),
            database: process.env.PGSQL_DATABASE,
        })
    }
    return conn;
}

export default getConnection;