import {Request, Response} from 'express';
import express from 'express';
import * as dao from './exp_reimb_dao';

export const router = express.Router();

router.get('', [
    async (req, resp: Response) => {
        try
        {
            let users = await dao.getusers();
            resp.json(users);
        }
        catch(err)
        {
            console.log(err);
            resp.sendStatus(500);
        }
    }
]);

router.post('/login', async (req, resp) => {
    try
    {
        const user = await dao.verifyUser(req.body.username, req.body.password);
        if(user)
        {
            resp.json(user);
        }
        else
        {
            resp.sendStatus(401);
        }
    }
    catch(err)
    {
        console.log(err);
        resp.sendStatus(500);
    }
})