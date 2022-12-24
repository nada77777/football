import React from 'react';
import { UseTopScoreContext } from '../../context/topscoreContext';
import styles from './topscore_profile.module.css';
const TopScoreProfile = (props) => {
    const defaultImg = 'imgs/default_img.png';
    const { topPlayer } = UseTopScoreContext();
    const { player, statistics} = topPlayer;
    console.log(topPlayer, topPlayer.player, statistics);
    // console.log(statistics);statistics

    // const player = {
    //       "player": {
    //         "id": 18784,
    //         "name": "J. Maddison",
    //         "firstname": "James Daniel",
    //         "lastname": "Maddison",
    //         "age": 26,
    //         "birth": {
    //           "date": "1996-11-23",
    //           "place": "Coventry",
    //           "country": "England"
    //         },
    //         "nationality": "England",
    //         "height": "175 cm",
    //         "weight": "73 kg",
    //         "injured": false,
    //         "photo": "https://media-6.api-sports.io/football/players/18784.png"
    //       },
    //       "statistics": [
    //         {
    //           "team": {
    //             "id": 51,
    //             "name": "Brighton",
    //             "logo": "https://media-6.api-sports.io/football/teams/51.png"
    //           },
    //           "league": {
    //             "id": 39,
    //             "name": "Premier League",
    //             "country": "England",
    //             "logo": "https://media-4.api-sports.io/football/leagues/39.png",
    //             "flag": "https://media-6.api-sports.io/flags/gb.svg",
    //             "season": 2022
    //           }
    //         }
    //       ]
    //   }

    return(
        <section className={styles.profile}>
            <div className={styles.profileInner}>
                <div className={styles.playerInfo}>
                    <img className={styles.playerImg} src={player ? player.photo : defaultImg} alt="player_img" />
                    <div className={styles.playerInfoText}>
                    <p>{player && player.name}</p>
                    <p>{player && player.birth.country}</p>
                    <p>{player && player.age}</p>
                    <p>{player && player.height}/{player && player.weight}</p>
                    </div>
                </div>
                <div className={styles.team}>
                    <img className={styles.teamLogo} src={statistics && statistics[0].team.logo} alt="team_logo" />
                    <p>{statistics && statistics[0].team.name}</p>
                </div>
            </div>
        </section>
    );
};

export default TopScoreProfile;