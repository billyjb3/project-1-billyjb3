import * as React from 'react';
import {ReimbTitle} from './reimb-title-component';
import {Navbar} from './nav-components/navbar-component';

export class ManagerHeader extends React.Component
{
    constructor(props: any)
    {
        super(props);
    }

    public render()
    {
        const text = ["Home", "Tickets", "Account"];
        const path = ["/manager-home", "/manager-tickets", "/manager-account"];

        return(
            <div className="pageHeader" id="pageHeader">
                <ReimbTitle/>
                <Navbar text={text} path={path}/>
            </div>
        )
    }
}