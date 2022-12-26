import React from 'react';

const TopScoreList = ({ topScoreItem, changeProfile, rank }) => {
    const { player: { name }, statistics: [{ team, games, goals }] } = topScoreItem;
    return (
        <tr onClick={() => changeProfile(topScoreItem)}>
            <td>{rank}</td>
            <td>{name}</td>
            <td>{team.name}</td>
            <td>{games.appearences}</td>
            <td>{goals.total}</td>
            {/* <th>순위</th>
                    <th>이름</th>
                    <th>팀명</th>
                    <th>경기</th>
                    <th>득점</th> */}

            {/* <td>{rank}</td>
        <td><img className={styles.teamLogo} src={team.logo} alt='team_logo'/>{team.name}</td>
        <td>{all.win}</td>
        <td>{all.draw}</td>
        <td>{all.lose}</td> */}
        </tr>
    );
};

export default TopScoreList;