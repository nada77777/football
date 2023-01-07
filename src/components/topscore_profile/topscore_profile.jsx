import React from 'react';
import styles from './topscore_profile.module.css';
const TopScoreProfile = ({ playerList, display }) => {

    const defaultImg = 'imgs/default_img.png';
    const displayType = display === 'clubPlayer' ? 'styles.squad' : 'styles.profile';


    return (

        <section className={displayType === 'styles.squad' ? `${styles.squad}` : `${styles.profile}`}>
            <div className={styles.profileInner}>
                <div className={styles.playerInfo}>
                    <img className={styles.playerImg} src={displayType === 'styles.squad' ? playerList.photo : (playerList ? playerList.player.photo : defaultImg)} alt={"player_img"} />
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
