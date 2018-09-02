import * as React from 'react';
import '../page-styles.css';
import {TicketWindow} from '../data-components/ticket-window/ticket-window-component';
import {NewTicket} from '../data-components/new-ticket/new-ticket-component';

export class EmployeeTickets extends React.Component
{
    public render()
    {
        return(
            <div className="pageContainer">
                <div className="pageBackground"></div>
                <div className="pageContent">
                    <NewTicket/>
                    <TicketWindow/>
                </div>
            </div>
        )
    }
}