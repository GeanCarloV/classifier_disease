import React, {Fragment} from 'react';
import Hero from './components/Hero';
import Hypertension from './components/hypertension/Hypertension';
import kidney from './components/kidney/kidney';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

function App () {
  return (
    <Fragment>
      <Router>
        <Provider store={store}>

          <Hero />

          <Switch>
            <Route exact path="/hypertension" component={Hypertension} />
            <Route exact path="/kidney" component={kidney} />
          </Switch>

        </Provider>
      </Router>
    </Fragment>
  );
}

export default App;
