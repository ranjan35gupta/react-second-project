import React, { Fragment } from 'react';

export function Invitation(props){
    const {event,name1,name2,name3,place}=props
    return(
        <Fragment>
            
        <p> Subject:{props.title} <br/>
         
        To:{props.email}<br/>
         Hi,{props.name}<br/>
         I am having a {event} next Friday at my Home.Would you like to come?It will be fun .Lots of people from my school are<br/>
         coming.you know some of them-{name1},{name2} ,{name3} <br/>
         <br/>
         My house is behind our school,near {place}.<br/>
         <br/>
         I hope you will come and see you soon.
         <br/>
         <br/>
         from,<br/>
         {props.name}

        </p>
        
        </Fragment>
    )
}