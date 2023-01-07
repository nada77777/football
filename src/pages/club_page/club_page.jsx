import React, { useEffect, useState } from 'react';
import styles from './club_page.module.css';
import ClubItem from '../../components/club_item/club_item';
import { UseDataContext } from '../../context/dataContext';



const ClubPage = (props) => {
    const [clubItems, setClubItems] = useState([]);
    const { getData } = UseDataContext();
    useEffect(() => {
        getData.readStandingsAndClubListData()//
            .then(result => setClubItems(result[0]));
    }, []);

    return (
        <section className={styles.clubPage}>
            <ul className={styles.clubItems}>
                {clubItems && clubItems.map((clubItem) => <ClubItem key={clubItem.team.id} clubItem={clubItem} />)}
            </ul>
        </section>
    );
};

export default ClubPage;















// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '2dd5d7e9ddmsh033fd62f7d75b99p1dff47jsn9b3715e9223f',
// 		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
// 	}
// };

// fetch('https://api-football-v1.p.rapidapi.com/v3/teams/statistics?league=39&season=2022&team=33', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));