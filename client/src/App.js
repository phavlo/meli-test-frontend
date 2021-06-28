import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';

const HomeView = lazy(() => import('./views/Home'));
const DetailsView = lazy(() => import('./views/Details'));
const ResultsView = lazy(() => import('./views/Results'));

const App = () => (
  <Router>
    <Suspense fallback={<div class="meli-page-loader"></div>}>
      <Switch>
        <Route exact path="/" component={HomeView}/>
        <Route path="/items/:id" component={DetailsView}/>
        <Route path="/items" component={ResultsView}/>
      </Switch>
    </Suspense>
  </Router>
);

export default App;
