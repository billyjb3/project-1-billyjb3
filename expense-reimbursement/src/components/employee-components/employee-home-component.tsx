import * as React from 'react';
import '../page-styles.css';

export class EmployeeHome extends React.Component
{
    public render()
    {
        return(
            <div className="pageContainer">
                <div className="pageBackground"></div>
                <div className="pageContent">
                    <p>HOME!</p>
                </div>
            </div>
        )
    }
}