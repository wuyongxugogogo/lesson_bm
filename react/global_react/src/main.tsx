// console.log('国际化的react+ts我来了');
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { LoginPage } from './pages/login';
import "./i18n";

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact={true} path="/" component={LoginPage} />
        </Switch>
    </HashRouter>,

    document.getElementById('root')
)