import React from 'react'
import { useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';
import Dashboard from '../components/dashboard/Dashboard'
import Landing from '../components/landing/Landing';
import { AuthRoute } from './AuthRoute';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

const AppRoute = () => {
    // const dispatch = useDispatch();
    const {isAuth} = useSelector(state => state.auth)
    return (
        <Router>
        <div>
            <Switch>

                <PublicRoute
                    exact 
                    path="/"
                    component={ Landing }
                    isAuthenticated={ isAuth }
                />

                <PublicRoute 
                    path="/auth"
                    component={ AuthRoute }
                    isAuthenticated={ isAuth }
                />
                <PrivateRoute 
                    exact
                    isAuthenticated={isAuth}
                    path="/dashboard"
                    component={ Dashboard}
                />

                <Redirect to="auth/login" />


            </Switch>
        </div>
    </Router>
    )
}

export default AppRoute
