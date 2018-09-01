import * as React from 'react';
import {ReimbTitle} from './reimb-title-component';
import {Navbar} from './nav-components/navbar-component';

export class EmployeeHeader extends React.Component
{
    public render()
    {
        const text = ["Home", "Tickets", "Account"];
        const path = ["/employee", "/employee/tickets", "/employee/account"];

        return(
            <div className="pageHeader" id="pageHeader">
                <ReimbTitle/>
                <Navbar text={text} path={path}/>
            </div>
        )
    }
}