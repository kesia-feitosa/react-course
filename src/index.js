import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { FavoritesContextsProvider } from './store/favorites-contexts';

ReactDOM.render(
  <FavoritesContextsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesContextsProvider>,
  document.getElementById('root')
);
