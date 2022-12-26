import React from 'react';
import TopScoreProfile from '../topscore_profile/topscore_profile';

const ClubSquad = ({ clubPlayers }) => {
    // console.log(clubPlayers && clubPlayers.map((clubPlayer) => clubPlayer.id));
    console.log('sqqqqqqqqqqqq', clubPlayers);
    return (
        <>
            <h1>ss</h1>
            <ul>
                {clubPlayers && clubPlayers.map((clubPlayer) => <TopScoreProfile key={clubPlayer.id} clubPlayer={clubPlayer} squad={'squad'} />)}
            </ul>
        </>
    );
};

export default ClubSquad;