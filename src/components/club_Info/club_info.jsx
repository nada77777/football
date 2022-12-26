import React from 'react';
import styles from './club_info.module.css';
const ClubResult = ({ clubResultItem }) => {
    const { result: { win, lose, draw, played, goals }, rank, points } = clubResultItem;
    return (
        <>
            <h1>clubInfo</h1>
            <table className={styles.clubInfoTable}>
                <thead>
                    <tr>
                        <th>순위</th>
                        <th>승</th>
                        <th>무</th>
                        <th>패</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{rank}</td>
                        <td>{win}</td>
                        <td>{draw}</td>
                        <td>{lose}</td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                        <th>승점</th>
                        <th>득점</th>
                        <th>실점</th>
                        <th>경기</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{points}</td>
                        <td>{goals.for}</td>
                        <td>{goals.against}</td>
                        <td>{played}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default ClubResult;








{/* <table>
<thead>
    <tr>
        <th>순위</th>
        <th>승</th>
        <th>무</th>
        <th>패</th>
    </tr>
    <tr>
        <th>승점</th>
        <th>득점</th>
        <th>실점</th>
        <th>경기</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
    </tr>
    <tr>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
    </tr>
</tbody>
</table> */}