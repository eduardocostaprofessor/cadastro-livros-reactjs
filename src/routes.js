import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from './components/Login/';
// import Logout from './components/Logout/';
import App from './components/App/index';
import BooksOut from './components/BooksOutPage';

export default props => (
    <BrowserRouter >
        <Switch>
            <Route exact path="/" component={App} />
            <Route path='/booksout' component={BooksOut} />
            <Route path='/login' component={Login} />
            <Route path='/logout' component={() => {
                sessionStorage.setItem('bookSistemUSer', 'false')
                window.location.href = '/login'
            }} />
            <Redirect from='*' to="/" />
        </Switch>
    </BrowserRouter>
)