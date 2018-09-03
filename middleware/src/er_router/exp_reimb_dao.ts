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

export async function createUser(user)
{
    const username = user.username;
    const password = user.password;
    const firstname = user.firstname;
    const lastname = user.lastname;
    const email = user.email;
    const role = user.role;

    const client = await connectionPool.connect();
    try
    {
        const resp = await client.query("INSERT INTO "+users+" (ers_username, ers_password, user_first_name, user_last_name, user_email, user_role_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING ers_users_id", [username, password, firstname, lastname, email, 1] );
        return resp;
    }
    finally
    {
        client.release();
    }
}
