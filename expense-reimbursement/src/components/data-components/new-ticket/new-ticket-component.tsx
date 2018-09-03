import * as React from 'react';
import './new-ticket-styles.css';

export class NewTicket extends React.Component
{
    public render()
    {
        return(
            <div className="ticketInputDiv pt2">
                <h2>Submit New Ticket</h2><hr/>
                <div className="inputGrid mt1">
                    <div className="inputBox">
                        <p>Amount:</p>
                        <input className="ticketInput" type="text" placeholder="amount"/><hr/>
                        <p>Type:</p>
                        <input className="ticketInput" type="text" placeholder="type"/><hr/>
                    </div>
                    <div className="inputBox">
                        <p>Description:</p>
                        <textarea className="ticketInput"/><hr/>
                    </div>
                    <div className="inputBox">
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}