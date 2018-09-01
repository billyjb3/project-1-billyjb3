import * as React from 'react';
import {Link} from 'react-router-dom';
import './nav-styles.css';

interface IProps
{
    text: string;
    path: string;
}

export const NavButton: React.StatelessComponent<IProps> = (props) =>{
    const {text, path} = props;
    return(
        <Link to={path}><div className="navButton"><div className="navHilite"></div><p className="navText">{text}</p></div></Link>
    )
}