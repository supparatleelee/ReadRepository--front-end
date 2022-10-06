import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.css';
import 'react-toastify/dist/ReactToastify.css';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SearchContextProvider from './contexts/SearchContext';
import LoadingContextProvider from './contexts/LoadingContext';
import AuthContextProvider from './contexts/AuthContext';
import BookContextProvider from './contexts/BookContext';
import ProfileContextProvider from './contexts/ProfileContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoadingContextProvider>
        <AuthContextProvider>
          <SearchContextProvider>
            <BookContextProvider>
              <ProfileContextProvider>
                <App />
              </ProfileContextProvider>
            </BookContextProvider>
          </SearchContextProvider>
        </AuthContextProvider>
      </LoadingContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
