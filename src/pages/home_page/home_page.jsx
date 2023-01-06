import React, { useEffect, useState } from 'react';
import styles from './home_page.module.css';
import Standings from '../../components/standings/standings';
import TopScore from '../../components/topscore/topscore';
import TopScoreProfile from '../../components/topscore_profile/topscore_profile';
import { UseDataContext } from '../../context/dataContext';

const HomePage = (props) => {
    const [standingItems, setStandingItems] = useState([]);
    const [topScoreItems, setTopScoreItems] = useState();
    const [topPlayer, setTopPlayer] = useState({});
    // const { topPlayer } = UseTopScoreContext();
    const checkTopPlayer = Object.keys(topPlayer).includes('player');
    // console.log(topPlayer);

    const { getData } = UseDataContext();

    useEffect(() => {
        getData.readStandingsAndClubListData()//
            .then(result => setStandingItems(result[0]));

        getData.readTopScoreData()//
            .then(result => {
                setTopScoreItems(result[0].slice(0, 11));
                setTopPlayer(result[1]);
            });

    }, []);

    return (
        <>
            <h1>ss</h1>
            <section className={styles.appInner}>
                <Standings standingItems={standingItems} />
                <section className={styles.appRight}>
                    {checkTopPlayer && <TopScoreProfile playerList={topPlayer} display='topScore' />}
                    {/* <TopScoreProfile playerList={topPlayer} display='topScore' /> */}
                    <TopScore topScoreItems={topScoreItems} />
                </section>
            </section>
        </>
    );
};

export default HomePage;