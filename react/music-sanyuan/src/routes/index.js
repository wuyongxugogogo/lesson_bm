import React, { lazy, Suspense } from "react";
import { Redirect } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import BlankLayout from "../layouts/BlankLayout";

const SuspenseComponent = Component => props => {
    return (
        <Suspense fallback={null}>
        <Component {...props}></Component>
        </Suspense>
    )
}

const RecommendComponent = lazy(() => import("../application/Recommend/"));

export default [
    {
      component: BlankLayout,
      routes: [
            {
                path: "/",
                component: HomeLayout,
                routes: [
                    {
                        path: "/",
                        exact: true,
                        render: () => <Redirect to={"/recommend"} />
                    },
                    {
                        path: "/recommend",
                        component: SuspenseComponent(RecommendComponent)
                    }
                ]
            }
        ]
    }
]