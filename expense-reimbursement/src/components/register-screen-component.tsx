import * as React from 'react';
import { Link } from 'react-router-dom';

export class RegisterScreen extends React.Component
{
    public render()
    {
        return(
            <div id="registerBox" className="loginBox">
                <div className="boxHeader">
                    <h2>New User</h2>
                </div>
                <div className="registerMain pt1">
                    <p className="registerLabels">First Name:</p>
                    <input className="loginInput" type="text"/><hr/>
                    <p className="registerLabels">Last Name:</p>
                    <input className="loginInput" type="text"/><hr/>
                    <p className="registerLabels">Email Address:</p>
                    <input className="loginInput" type="text"/><hr/>
                    <p className="registerLabels">Username:</p>
                    <input className="loginInput" type="text"/><hr/>
                    <p className="registerLabels">Password:</p>
                    <input className="loginInput" type="text"/><hr/>
                    <Link to="/login">
                        <button className="entryButton mt4">Cancel</button>
                    </Link>
                    <button className="entryButton">Register</button>
                </div>
            </div>
        );
    }
}