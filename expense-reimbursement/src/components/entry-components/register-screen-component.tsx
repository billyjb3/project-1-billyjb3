import * as React from 'react';
import { Link } from 'react-router-dom';
import {RouteComponentProps} from 'react-router';
import './entry-styles.css';

interface IProps
{
    newUser: {
        firstname: string,
        lastname: string,
        email: string,
        username: string,
        password: string
    }
}

export class RegisterScreen extends React.Component<RouteComponentProps<{}>, IProps> 
{
    constructor (props: any)
    {
        super(props);
        this.state = {
            newUser: {
                firstname: "",
                lastname: "",
                email: "",
                username: "",
                password: ""
            }
        }
    }

    public render()
    {
        return(
            <div className="loginScreen">
                <div className="boxHeader">
                    <h2>New User</h2>
                </div>
                <div className="registerMain pt1">
                    <p className="registerLabels">First Name:</p>
                    <input className="loginInput" type="text" onChange={this.firstnameChanged}/><hr/>
                    <p className="registerLabels">Last Name:</p>
                    <input className="loginInput" type="text" onChange={this.lastnameChanged}/><hr/>
                    <p className="registerLabels">Email Address:</p>
                    <input className="loginInput" type="text" onChange={this.emailChanged}/><hr/>
                    <p className="registerLabels">Username:</p>
                    <input className="loginInput" type="text" onChange={this.usernameChanged}/><hr/>
                    <p className="registerLabels">Password:</p>
                    <input className="loginInput" type="text" onChange={this.passwordChanged}/><hr/>
                    <Link to="/login">
                        <button className="entryButton mt4">Cancel</button>
                    </Link>
                    <button className="entryButton" onClick={this.register}>Register</button>
                </div>
            </div>
        );
    }

    public register = () => {
        fetch("http://localhost:3001/er_router/register", {
            body: JSON.stringify(this.state.newUser),
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST"
        })
        .then(resp => {
            if(resp.status === 401)
            {
                alert("username taken");
            }
            else if(resp.status === 200)
            {
                alert("new user account successfully created");
                this.props.history.push("/login");
            }
        })
    }

    public firstnameChanged = (e: any) => {
        this.setState({
            newUser: {
                ...this.state.newUser,
                firstname: e.target.value
            }
        })
    }

    public lastnameChanged = (e: any) => {
        this.setState({
            newUser: {
                ...this.state.newUser,
                lastname: e.target.value
            }
        })
    }

    public emailChanged = (e: any) => {
        this.setState({
            newUser: {
                ...this.state.newUser,
                email: e.target.value
            }
        })
    }

    public usernameChanged = (e: any) => {
        this.setState({
            newUser: {
                ...this.state.newUser,
                username: e.target.value
            }
        })
    }

    public passwordChanged = (e: any) => {
        this.setState({
            newUser: {
                ...this.state.newUser,
                password: e.target.value
            }
        })
    }
}