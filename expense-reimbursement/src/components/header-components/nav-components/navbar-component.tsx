import * as React from 'react';
import './nav-styles.css';
import {NavButton} from './nav-button-component';

interface IProps
{
    text: string[];
    path: string[];
}

export const Navbar: React.StatelessComponent<IProps> = (props) =>
{
    const {text, path} = props;
    const buttons = [];
    for(let i = 0; i < text.length; i++)
    {
        buttons.push(<NavButton text={text[i]} path={path[i]}/>)
    }
    return (
        <div className="navbar">
            {buttons}
        </div>
    )
}