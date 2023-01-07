import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ClubPage from './pages/club_page/club_page';
import ClubInfoPage from './pages/club_info_page/club_info_page';
import HomePage from './pages/home_page/home_page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        path: '/',
        element:

          <HomePage />

      },
      {
        path: '/clubs',
        element: <ClubPage />
      },
      {
        path: '/:teamURL/:id',
        element: <ClubInfoPage />
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);

reportWebVitals();
