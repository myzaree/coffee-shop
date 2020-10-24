import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header } from '@layout';

const Home = React.lazy(() => import('../pages/home/Home'));
const History = React.lazy(() => import('../pages/history/History'));

export default (): React.ReactElement => (
  <Router>
    <Header />
    <Switch>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Route exact path="/history" component={History} />
        <Route exact path="/" component={Home} />
        {/* <Route component={NotFound} /> */}
      </Suspense>
    </Switch>
  </Router>
);
