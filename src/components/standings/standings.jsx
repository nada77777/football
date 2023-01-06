import React from 'react';
import { UseStandingsContext } from '../../context/standingsContext';
import StandingsList from '../standings_list/standings_list';
import styles from './standings.module.css';

const Standings = ({ standingItems }) => {

    return (
        <section className={styles.standings}>
            <div className={styles.standingsTop}>
                <img src='imgs/standing_logo.png' alt="standing_logo" />
                <div className={styles.standingsTopTitle}>
                    <span>First Team</span>
                </div>
            </div>

            <table className={styles.standingsTable}>
                <thead>
                    <tr>
                        <th>순위</th>
                        <th>팀명</th>
                        <th>승</th>
                        <th>무</th>
                        <th>패</th>
                        <th>경기</th>
                        <th>득실차</th>
                        <th>승점</th>
                    </tr>
                </thead>
                <tbody>
                    {standingItems && standingItems.map((standingItem) => <StandingsList key={standingItem.team.id} standingItem={standingItem} />)}
                </tbody>
            </table>

        </section>
    );
};

export default Standings;