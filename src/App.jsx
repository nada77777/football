import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './App.module.css';
import Header from './components/header/header';
import { DataContextProvider } from './context/dataContext';



const App = (props) => {

  return (
    <DataContextProvider>
      <div className={styles.app}>
        <Header />
        <Outlet />
      </div>
    </DataContextProvider>
  );
};

export default App;


// return (
//   <TopScoreContextProvider>
//     <ClubInfoContextProvider>
//       <StandingsContextProvider>
//         <div className={styles.app}>
//           <Header />
//           <Outlet />
//         </div>
//       </StandingsContextProvider>
//     </ClubInfoContextProvider>
//   </TopScoreContextProvider>
// );