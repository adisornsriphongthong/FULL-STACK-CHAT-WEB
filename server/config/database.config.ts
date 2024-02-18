import oracledb, { Connection } from 'oracledb';

const poolReader = {
    query: async (query: string, param?: any) => {
        let connection: Connection;
        try {
            connection = await oracledb.getConnection({
                user: process.env.USER,
                password: process.env.PASSWORD,
                connectString: process.env.CONNECTSTRING,
                privilege: oracledb.SYSDBA,
            });
            const result = await connection.execute(query, param || {})
            return result.rows
        } catch (error) {
            throw error
        }
    }
}

const poolWriter = {
    query: async (query: string, param?: any) => {
        let connection: Connection;
        try {
            connection = await oracledb.getConnection({
                user: process.env.USER,
                password: process.env.PASSWORD,
                connectString: process.env.CONNECTSTRING,
                privilege: oracledb.SYSDBA,
            });
            const result = await connection.execute(query, param || {})
            return result.rows
        } catch (error) {
            throw error
        }
    }
}

export { poolReader, poolWriter };