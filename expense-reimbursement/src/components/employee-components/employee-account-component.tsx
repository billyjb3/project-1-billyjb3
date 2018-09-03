import * as React from 'react';
import {EmployeeHeader} from '../header-components/employee-header-component';

export class EmployeeAccount extends React.Component
{
    public render()
    {
        return (
            <div className="pageContainer">
                <EmployeeHeader/>
                <div className="pageBackground"></div>
                <div className="pageContent">
                    <p>ACCOUNT!</p>
                </div>
            </div>
        )
    }
}