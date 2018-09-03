import * as React from 'react';
import {ManagerHeader} from '../header-components/manager-header-component';
import '../page-styles.css';

export class ManagerAccount extends React.Component
{
    public render()
    {
        return(
            <div className="pageContainer">
                <ManagerHeader/>
                <div className="pageBackground"></div>
                <div className="pageContent">
                    <p>Account!</p>
                </div>
            </div>
        )
    }
}