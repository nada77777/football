import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UseStandingsContext } from '../../context/standingsContext';
import styles from './header.module.css';

const Header = (props) => {
    const { clubItems } = UseStandingsContext();
    const navigate = useNavigate();

    return (
        <section className={styles.header}>

            <div className={styles.logoHeader}>
                <p>club site</p>
                <ul>
                    {clubItems && clubItems.map((item) =>
                        <li key={item.team.id}>
                            <img src={item.team.logo} alt="img" />
                        </li>
                    )}
                </ul>
            </div>
            <div className={styles.nav}>
                <a className={styles.navLogo} href="ss">
                    <img src='imgs/main.png' alt='main_img' />
                </a>
                <ul>
                    <li>Premier League</li>
                    <li onClick={() => navigate('/clubs')}>Clubs</li>
                    <li>No Room For Racism</li>
                </ul>
            </div>

        </section>
    );
};

export default Header;