import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from './components/Login/index';
import App from './components/App/index';
import BooksOut from './components/BooksOutPage';



export default props => (
    <BrowserRouter >
        <Switch>
            <Route exact path="/" component={App} />
            <Route path='/booksout' component={BooksOut} />
            <Route path='/login' component={Login} />
            <Redirect from='*' to="/" />
        </Switch>
    </BrowserRouter>


    // <Router history={hashHistory}>
    //     <Route path='/index' component={App} />
    //     <Route path='/booksOut' component={BooksOut} />
    //     <Redirect from='*' to="/index" />
    // </Router>
)