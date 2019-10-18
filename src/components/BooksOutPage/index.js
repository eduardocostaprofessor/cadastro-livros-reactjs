import React from 'react';
import { isAuthenticated } from '../../auth';
import { Route, Redirect } from "react-router-dom";

// export const Teste = () => (
//     <h1>Teste Books Out</h1>
// )

// // console.log('ha');
// export default ({ component: Component, ...rest }) => (
//     <Route
//         {...rest}
//         render={props =>
//             isAuthenticated() ? (
//                 // <Component {...props} />
//                 <Teste />
//             ) : (
//                     <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
//                 )
//         }
//     />
// );
// console.log(isAuthenticated());

export default () => (
    <Route 
    render={props => (
        isAuthenticated() ? (
            <h1>BOOKS OUT PAGE</h1>
        ) : (
                <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            )
    )} />
)