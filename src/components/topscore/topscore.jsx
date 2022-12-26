import React from 'react';
import { UseTopScoreContext } from '../../context/topscoreContext';
import TopScoreList from '../topscore_list/topscore_list';

import styles from './topscore.module.css';
const TopScore = (props) => {

    const { topScoreItems, changeProfile } = UseTopScoreContext();

    return (
        <section className={styles.standings}>
            <div className={styles.standingsTop}>
                <img src='imgs/standing_logo.png' alt="standing_logo" />
                <div className={styles.standingsTopTitle}>
                    <span>Top Scores</span>
                </div>
            </div>

            <table className={styles.topScoreTable}>
                <thead>
                    <tr>
                        <th>순위</th>
                        <th>이름</th>
                        <th>팀명</th>
                        <th>경기</th>
                        <th>득점</th>
                    </tr>
                </thead>
                <tbody>
                    {topScoreItems && topScoreItems.map((topScoreItem, index) => <TopScoreList key={topScoreItem.player.id} topScoreItem={topScoreItem} changeProfile={changeProfile} rank={index + 1} />)}
                </tbody>
            </table>

        </section>
    );
};

export default TopScore;