import React, { useEffect, useState } from 'react';
import styles from './home_page.module.css';
import Standings from '../../components/standings/standings';
import TopScore from '../../components/topscore/topscore';
import TopScoreProfile from '../../components/topscore_profile/topscore_profile';
import { UseDataContext } from '../../context/dataContext';

const HomePage = (props) => {
    const { getData, standingItemsData } = UseDataContext();
    const standingItems = standingItemsData;

    const [topScoreItems, setTopScoreItems] = useState();
    const [topPlayer, setTopPlayer] = useState({});

    const checkTopPlayer = Object.keys(topPlayer).includes('player');

    const changeProfile = (profile) => {
        setTopPlayer(profile);
    }

    useEffect(() => {

        getData.readTopScoreData()//
            .then(result => {
                setTopScoreItems(result[0].slice(0, 11));
                setTopPlayer(result[1]);
            });

    }, []);

    return (
        <section className={styles.appInner}>
            <Standings standingItems={standingItems} />
            <section className={styles.appRight}>
                {checkTopPlayer && <TopScoreProfile playerList={topPlayer} display='topScore' />}
                <TopScore topScoreItems={topScoreItems} changeProfile={changeProfile} />
            </section>
        </section>
    );
};

export default HomePage;