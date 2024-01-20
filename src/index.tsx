import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store/store';
import { HashRouter } from 'react-router-dom';
import './app/styles/index.scss';

import '@fortawesome/fontawesome-free/css/all.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
);
