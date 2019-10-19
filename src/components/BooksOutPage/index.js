import React from 'react';
import { isAuthenticated } from '../../auth';
import { Route, Redirect } from "react-router-dom";

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