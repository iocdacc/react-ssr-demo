import React from 'react';
import ReactDOM from 'react-dom';
import { storeClient } from './store';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from './routes';

let store = storeClient()

let AppClient = props=>(
  <Provider store={store}>
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(<AppClient/>, document.getElementById('root'))