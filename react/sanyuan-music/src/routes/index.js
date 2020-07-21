// 路由的本质是什么？
import React from 'react';
import { Redirect } from 'react-router-dom';
import Recommend from '../application/Recommend/';
import BlankLayout from '../layouts/BlankLayout';

export default [
    {
        component: BlankLayout,
        routes: [
            {
                path:'/',
                exact: true,
                render: () => <Redirect to={"/recommend"}/>
            },
            {
                path:'/recommend',
                component: Recommend,
                // routes: [
                //     {
                //         path: '/recommend/:id',
                //         component: AlbumComponent
                //     }
                // ]
            }
        ]
    }
]