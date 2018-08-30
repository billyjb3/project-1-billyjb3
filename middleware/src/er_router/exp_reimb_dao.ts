import { connectionPool} from "../connection-util";
const schema = "expense_reimbursement";
const users = schema + ".ers_users";

export async function getusers()
{
    const client = await connectionPool.connect();
    try
    {
        const resp = await client.query("SELECT * FROM "+users);
        return resp.rows;
    }
    finally
    {
        client.release();
    }
}

export async function verifyUser(username: string, password: string)
{
    const client = await connectionPool.connect();
    try
    {
        const resp = await client.query("SELECT * FROM "+users+" WHERE ers_username = $1 AND ers_password = $2", [username, password]);
        if(resp.rows.length == 1)
            return resp.rows[0];
    }
    finally
    {
        client.release();
    }
}
