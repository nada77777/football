import React from 'react';
import TopScoreProfile from '../topscore_profile/topscore_profile';

const ClubSquad = ({ clubPlayers }) => {

    return (
        <>
            <ul>
                {clubPlayers && clubPlayers.map((clubPlayer) => <TopScoreProfile key={clubPlayer.id} playerList={clubPlayer} display='clubPlayer' />)}
            </ul>
        </>
    );
};

export default ClubSquad;