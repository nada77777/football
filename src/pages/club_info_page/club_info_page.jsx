import React, { useState } from 'react';
import styles from './club_info_page.module.css';
import { useLocation } from 'react-router-dom';
import ClubResult from '../../components/club_Info/club_info';
import { ClubInfoContextProvider, UseClubInfoContext } from '../../context/clubInfoContext';
import ClubSquad from '../../components/club_squad/club_squad';



const ClubInfoPage = (props) => {
    const [displayStatus, setDisplayStatus] = useState('result');
    const { clubInfoItem, clubResultItem, clubPlayers } = UseClubInfoContext();
    const { founded, logo, name, venue_address, venue_city, venue_name } = clubInfoItem;

    return (

        <section className={styles.clubInfoPage}>
            <div className={styles.clubInfoPageBanner}>
                <div className={styles.ss}></div>
                <span className={styles.bannerImg}></span>

                <div className={styles.clubInfo}>
                    <div className={styles.clubLogo}>
                        <span className={styles.clubLogoInner}>
                            <img src={logo} alt='club_img' />
                        </span>
                    </div>
                    <div className={styles.clubInfoTxt}>
                        <h1>{name}</h1>
                        <p>{venue_name}</p>
                        <p>{venue_address} / {venue_city}</p>
                        <p>{founded}</p>
                    </div>
                </div>

                <div className={styles.buttons}>
                    <button onClick={() => setDisplayStatus('result')}>OverView</button>
                    <button onClick={() => setDisplayStatus('clubPlayers')}>Squad</button>
                </div>
            </div>


            {displayStatus === 'result' ?
                <ClubResult clubResultItem={clubResultItem} />
                : <ClubSquad clubPlayers={clubPlayers} />}
        </section>


    );
};

export default ClubInfoPage;

