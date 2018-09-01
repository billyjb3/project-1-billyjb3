import * as React from 'react';
import {Page} from '../page-components/page-component';
import {TicketWindow} from '../data-components/ticket-window-component';

export class EmployeeTickets extends React.Component
{
    public render()
    {
        return(
            <Page>
                <TicketWindow/>
            </Page>
        )
    }
}