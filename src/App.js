import React from 'react';
import './App.css';
import VisualizeContainer from './containers/visualize-screen'
import CreateScreen from './containers/create-screen'
import EditScreen from './containers/edit-screen'
import { Provider } from 'react-redux'
import store from './core/store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/">
              <VisualizeContainer />
            </Route>
            <Route exact path="/edit">
              <EditScreen />
            </Route>
            <Route exact path="/delete">
              <div>
                Ruta eliminar
              </div>
            </Route>
            <Route exact path="/create">
              <CreateScreen />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
