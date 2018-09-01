import * as React from "react";

export const PageContent: React.StatelessComponent = (props: any) =>
{
    return(
        <div className="pageContent">
            {props.children}
        </div>
    )
}