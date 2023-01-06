import React from 'react';
import { UseTopScoreContext } from '../../context/topscoreContext';
import styles from './topscore_profile.module.css';
const TopScoreProfile = ({ playerList, display }) => {
    const defaultImg = 'imgs/default_img.png';
    const displayType = display === 'clubPlayer' ? 'styles.squad' : 'styles.profile';


    return (

        <section className={displayType === 'styles.squad' ? `${styles.squad}` : `${styles.profile}`}>
            <div className={styles.profileInner}>
                <div className={styles.playerInfo}>
                    <img className={styles.playerImg} src={displayType === 'styles.squad' ? playerList.photo : (playerList ? playerList.player.photo : defaultImg)} alt="player_img" />
                    <div className={styles.playerInfoText}>
                        <p>{displayType === 'styles.squad' ? playerList.name : (playerList && playerList.player.name)}</p>
                        <p>{displayType === 'styles.squad' ? `number: ${playerList.number || '__'}` : (playerList && playerList.player.birth.date)}</p>
                        <p>age: {displayType === 'styles.squad' ? playerList.age : (playerList && playerList.player.age)}</p>
                        <p>{displayType === 'styles.squad' ? `position: ${playerList.position}` : (playerList && `${playerList.player.height} / ${playerList.player.weight}`)}</p>
                    </div>
                </div>
                {displayType === 'styles.squad' ? '' : (<div className={styles.team}>
                    <img className={styles.teamLogo} src={(playerList.statistics && playerList.statistics[0].team.logo) || ''} alt="team_logo" />
                    <p>{playerList.statistics && playerList.statistics[0].team.name}</p>
                </div>)}
            </div>
        </section >
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
















{/* <section className={displayType ? `${styles.squad}` : `${styles.profile}`}>
<div className={styles.profileInner}>
    <div className={styles.playerInfo}>
        <img className={styles.playerImg} src={displayType ? clubPlayer.photo : (player ? player.photo : defaultImg)} alt="player_img" />
        <div className={styles.playerInfoText}>
            <p>{displayType ? clubPlayer.name : (player && player.name)}</p>
            <p>{displayType ? `number: ${clubPlayer.number}` : (player && player.birth.date)}</p>
            <p>age: {displayType ? clubPlayer.age : (player && player.age)}</p>
            <p>{displayType ? `position: ${clubPlayer.position}` : (player && `${player.height} / ${player.weight}`)}</p>
        </div>
    </div>
    {displayType ? '' : (<div className={styles.team}>
        <img className={styles.teamLogo} src={(statistics && statistics[0].team.logo) || ''} alt="team_logo" />
        <p>{statistics && statistics[0].team.name}</p>
    </div>)}
</div>
</section> */}