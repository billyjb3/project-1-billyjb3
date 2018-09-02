import * as React from 'react';
import './new-ticket-styles.css';

export class NewTicket extends React.Component
{
    public render()
    {
        return(
            <div className="ticketInputDiv">
                <h2>Submit New Ticket</h2><hr/>
                <input className="ticketInput" type="text" placeholder="amount"/>
                <input className="ticketInput" type="text" placeholder="type"/>
                <textarea className="ticketInput"/>
            </div>
        )
    }
}