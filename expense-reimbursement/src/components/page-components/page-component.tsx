import * as React from 'react';
import {PageContent} from './page-content-component';
import './page-styles.css';

export const Page: React.StatelessComponent = (props: any) =>
{
    console.log(props.children);
    return(
        <div>
            <div className="pageBackground"></div>
            <PageContent>{props.children}</PageContent>
        </div>
    )
}