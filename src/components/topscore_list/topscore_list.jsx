import React from 'react';

const TopScoreList = ({ topScoreItem, changeProfile, rank }) => {
    const { player: { name }, statistics: [{ team, games, goals }] } = topScoreItem;
    return (
        // <tr onClick={() => changeProfile(topScoreItem)}>
        <tr>
            <td>{rank}</td>
            <td>{name}</td>
            <td>{team.name}</td>
            <td>{games.appearences}</td>
            <td>{goals.total}</td>
        </tr>
    );
};

export default TopScoreList;