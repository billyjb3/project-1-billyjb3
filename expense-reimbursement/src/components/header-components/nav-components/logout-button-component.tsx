import * as React from 'react';
import {Link} from 'react-router-dom';

export class LogoutButton extends React.Component
{
    public render()
    {
        return (
            <Link to="/login"><div className="navButton right" onClick={this.logout}><div className="navHilite"></div><p className="navText">Logout</p></div></Link>
        )
    }

    public logout()
    {
        localStorage.removeItem("user");
    }
}