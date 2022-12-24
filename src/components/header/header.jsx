import React from 'react';
import { UseStandingsContext } from '../../context/standingsContext';
import styles from './header.module.css';

const Header = (props) => {
    const { logos } = UseStandingsContext(); 

    return(
        <section className={styles.header}>
        
        <div className={styles.logoHeader}>
            <p>club site</p>
            <ul>
                {logos && logos.map((logo) => 
                <li key={logo.id}>
                    <img src={logo.logo} alt="img" />
                </li>
                )}
            </ul>
        </div>
        <div className={styles.nav}>
            <a className={styles.navLogo} href="ss">
                <img src='imgs/main.png' alt='main_img'/>
            </a>
            <ul>
                <li>Premier League</li>
                <li>No Room For Racism</li>
            </ul>
        </div>
    
        </section>
    );
};

export default Header;