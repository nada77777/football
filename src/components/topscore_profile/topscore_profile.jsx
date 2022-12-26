import React from 'react';
import { UseTopScoreContext } from '../../context/topscoreContext';
import styles from './topscore_profile.module.css';
const TopScoreProfile = ({ clubPlayer, squad }) => {
    const defaultImg = 'imgs/default_img.png';
    const { topPlayer } = UseTopScoreContext();
    const { player, statistics } = topPlayer;
    console.log(clubPlayer);

    return (
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


//기존
{/* <section className={styles.profile}>
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
</section> */}















//바뀜
{/* <section className={styles.profile}>
<div className={styles.profileInner}>
    <div className={styles.playerInfo}>
        <img className={styles.playerImg} src={squad ? clubPlayer.photo : (player ? player.photo : defaultImg)} alt="player_img" />
        <div className={styles.playerInfoText}>
            <p>{squad ? clubPlayer.name : (player && player.name)}</p>
            <p>{squad ? `number: ${clubPlayer.number}` : (player && player.birth)}</p>
            <p>age: {squad ? clubPlayer.age : (player && player.age)}</p>
            <p>{squad ? `position: ${clubPlayer.position}` : (player && `${player.height} / ${player.weight}`)}</p>
        </div>
    </div>
    {squad ? '' : (<div className={styles.team}>
        <img className={styles.teamLogo} src={(statistics && statistics[0].team.logo) || ''} alt="team_logo" />
        <p>{statistics && statistics[0].team.name}</p>
    </div>)}
</div>
</section> */}