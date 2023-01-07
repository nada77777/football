import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UseDataContext } from '../../context/dataContext';
import styles from './header.module.css';

const Header = (props) => {
    const { standingItemsData } = UseDataContext();

    const clubItems = standingItemsData;

    const navigate = useNavigate();

    const onClick = (event, path) => {
        event.preventDefault();
        navigate(path);
    };

    const goToClubPage = (item) => {
        const { team: { name, id } } = item;
        const teamURL = name.replace(/ /g, "");
        navigate(`/${teamURL}/${id}`, { state: { clubId: id } });
    };

    return (
        <section className={styles.header}>
            <div className={styles.logoHeader}>
                <p>club site</p>
                <ul>
                    {clubItems && clubItems.map((item) =>
                        <li key={item.team.id} onClick={() => goToClubPage(item)}>
                            <img src={item.team.logo} alt="img" />
                        </li>
                    )}
                </ul>
            </div>
            <div className={styles.nav}>
                <a onClick={(event) => onClick(event, '/')} className={styles.navLogo} href=" ">
                </a>
                <ul>
                    <li onClick={(event) => onClick(event, '/')}>Premier League</li>
                    <li onClick={(event) => onClick(event, '/clubs')}>Clubs</li>
                </ul>
                <h1 className={styles.campaign}>No Room For Racism</h1>
            </div>
        </section>
    );
};

export default Header;