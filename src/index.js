import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ClubPage from './pages/club_page';
import Standings from './components/standings/standings';
import TopScoreProfile from './components/topscore_profile/topscore_profile';
import TopScore from './components/topscore/topscore';
import ClubInfoPage from './pages/club_info_page/club_info_page';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        path: '/',
        element: <section className='appInner'>
          <Standings />
          <section className='appRight'>
            <TopScoreProfile />
            <TopScore />
          </section>
        </section>
      },
      {
        path: '/clubs',
        element: <ClubPage />,
      },
      {
        path: '/:teamURL',
        element: <ClubInfoPage />,
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
{/* <section className={styles.appInner}>
<Standings />


<section className={styles.appRight}>
  <TopScoreProfile />
  <TopScore />
</section>
</section>
<ClubPage /> */}