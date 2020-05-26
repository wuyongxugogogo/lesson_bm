import React from 'react';
import { Route, Link, Switch, useRouteMatch } from 'react-router-dom';
import HomeHeader from './HomeHeader';
import List from './List';
import Chart from './Chart';

// <>空标签 组件:React.fragment
function Index() {
   let { path, url } = useRouteMatch;
   return (
      <React.Fragment>
         <HomeHeader />
         <Link to={`${url}/list`}>列表模式</Link>
         <Link to={`${url}/chart`}>图表模式</Link>
         <Switch >
            <Route path={path} exact >
               <List />
            </Route>
            <Route path={`${path}/list`} exact >
               <List />
            </Route>
            <Route path={`${path}/chart`}>
               <Chart />
            </Route>
         </Switch>
      </React.Fragment>
   )
}

export default Index;