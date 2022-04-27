import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from 'components/app/app';
import { store } from 'store';
import { Provider } from 'react-redux';
import { fetchOffersAction } from 'store/api-actions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(fetchOffersAction());

render(
  <StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
