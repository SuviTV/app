import React from 'react'
import {Route, Switch} from 'react-router-dom'

// views

import login from './views/login/login'


export default (
    <Switch>
        <Route component={login} exact path='/' />
    </Switch>
)