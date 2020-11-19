import React from "react";

import Home from '../screen/Home'
import CartDetail from '../screen/CartDetail'
import AllCourse from '../screen/AllCourse'
import Admin from '../screen/Admin'
import CourseDetail from "../screen/CourseDetail";
import Login from "../screen/Login";
import Signin from "../screen/Signin";

export const routes = [
    {
        path: '/',
        exact: true,
        main: ({ history, match }) => <Home history={history} match={match} />
    },
    {
        path: '/courses',
        exact: true,
        main: ({ history, match }) => <AllCourse history={history} math={match} />
    },
    {
        path: '/courses/:id',
        exact: false,
        main: ({ match }) => <CourseDetail math={match} />
    },
    {
        path: '/cart',
        exact: false,
        main: ({ match }) => <CartDetail math={match} />
    },
    {
        path: "/admin",
        exact: false,
        main: () => <Admin />
    },
    {
        path: "/login",
        exact: false,
        main: ({ history }) => <Login history={history} />
    },
    {
        path: "/signin",
        exact: false,
        main: ({ history }) => <Signin history={history} />
    },
]