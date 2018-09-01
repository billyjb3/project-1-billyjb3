import * as React from 'react';

export class TicketWindow extends React.Component
{
    public render()
    {
        return (
            <div className="ticketsDiv">
                <table className="ticketTable">
                    <tr>
                        <th>ID</th>
                        <th>Amount</th>
                        <th>Date Submitted</th>
                        <th>Date Resolved</th>
                        <th>Resolved By</th>
                        <th>Type</th>
                        <th>Status</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>200$</td>
                        <td>12-05-2003</td>
                        <td>12-07-2003</td>
                        <td>Jimmy John</td>
                        <td>Travel</td>
                        <td>Resolved</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>200$</td>
                        <td>12-05-2003</td>
                        <td>12-07-2003</td>
                        <td>Jimmy John</td>
                        <td>Travel</td>
                        <td>Resolved</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>200$</td>
                        <td>12-05-2003</td>
                        <td>12-07-2003</td>
                        <td>Jimmy John</td>
                        <td>Travel</td>
                        <td>Resolved</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>200$</td>
                        <td>12-05-2003</td>
                        <td>12-07-2003</td>
                        <td>Jimmy John</td>
                        <td>Travel</td>
                        <td>Resolved</td>
                    </tr>
                </table>
            </div>
        );
    }
}