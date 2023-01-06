import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './standings_list.module.css';
const StandingsList = ({ standingItem }) => {
    const { all, goalsDiff, points, team, rank } = standingItem;
    const navigate = useNavigate();

    const goToClubPage = (item) => {
        const { team: { name, id } } = item;
        const teamURL = name.replace(/ /g, "");
        navigate(`/${teamURL}/${id}`, { state: { clubId: id } });
    };

    return (
        <tr onClick={() => goToClubPage(standingItem)}>
            <td>{rank}</td>
            <td><img className={styles.teamLogo} src={team.logo} alt='team_logo' />{team.name}</td>
            <td>{all.win}</td>
            <td>{all.draw}</td>
            <td>{all.lose}</td>
            <td>{all.played}</td>
            <td>{goalsDiff}</td>
            <td>{points}</td>
        </tr>
    );
};

export default StandingsList;
