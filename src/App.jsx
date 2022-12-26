import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './App.module.css';
import Header from './components/header/header';
import Standings from './components/standings/standings';
import TopScore from './components/topscore/topscore';
import TopScoreProfile from './components/topscore_profile/topscore_profile';
import { ClubInfoContextProvider } from './context/clubInfoContext';
import { StandingsContextProvider } from './context/standingsContext';
import { TopScoreContextProvider } from './context/topscoreContext';



const App = (props) => {

  return (
    <div className={styles.app}>
      <ClubInfoContextProvider>
        <StandingsContextProvider>
          <TopScoreContextProvider>
            <Header />
            <Outlet />
          </TopScoreContextProvider>
        </StandingsContextProvider>
      </ClubInfoContextProvider>
    </div>
  );
};

export default App;

{/* <StandingsContextProvider>
<TopScoreContextProvider>
  <div className={styles.app}>
    <Header />
    <section className={styles.appInner}>
      <Standings />


      <section className={styles.appRight}>
        <TopScoreProfile />
        <TopScore />
      </section>
    </section>
    <ClubPage />
  </div>
</TopScoreContextProvider>
</StandingsContextProvider> */}