import React, { useEffect, useState } from 'react';
import styles from './club_info_page.module.css';
import ClubResult from '../../components/club_Info/club_info';
import { UseClubInfoContext } from '../../context/clubInfoContext';
import ClubSquad from '../../components/club_squad/club_squad';
import { useLocation } from 'react-router-dom';



const ClubInfoPage = (props) => {
    const [displayStatus, setDisplayStatus] = useState('result');
    const { clubResultItems, clubPlayersList, clubInfoItems, getClubId } = UseClubInfoContext();
    const clubId = useLocation().state.clubId;
    getClubId(clubId);
    const clubInfoItem = clubInfoItems.filter((item) => item.team_id === clubId)[0];
    const clubResultItem = clubResultItems.filter((item) => (item.team.id === clubId))[0];

    // const clubInfoItem = clubInfoItems;
    // const clubResultItem = clubResultItems;






    const { founded, logo, name, venue_address, venue_city, venue_name } = clubInfoItem;

    return (

        <section className={styles.clubInfoPage}>
            <div className={styles.clubInfoPageBanner}>
                <div className={styles.ss}></div>
                <span className={styles.bannerImg}></span>
                <div className={styles.clubInfo}>
                    <div className={styles.clubLogo}>
                        <span className={styles.clubLogoInner}>
                            <img src={clubInfoItem && logo} alt='club_img' />
                        </span>
                    </div>
                    <div className={styles.clubInfoTxt}>
                        <h1>{clubInfoItem && name}</h1>
                        <p>{clubInfoItem && venue_name}</p>
                        <p>{clubInfoItem && venue_address} / {clubInfoItem && venue_city}</p>
                        <p>{clubInfoItem && founded}</p>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <button onClick={() => setDisplayStatus('result')}>OverView</button>
                    <button onClick={() => setDisplayStatus('clubPlayers')}>Squad</button>
                </div>
            </div>

            {displayStatus === 'result' ?
                <ClubResult clubResultItem={clubResultItem} />
                : <ClubSquad clubPlayers={clubPlayersList} />}
        </section>


    );
};

export default ClubInfoPage;










// import React, { useEffect, useState } from 'react';
// import styles from './club_info_page.module.css';
// import ClubResult from '../../components/club_Info/club_info';
// import { UseClubInfoContext } from '../../context/clubInfoContext';
// import ClubSquad from '../../components/club_squad/club_squad';
// import { useLocation } from 'react-router-dom';



// const ClubInfoPage = (props) => {
//     const [displayStatus, setDisplayStatus] = useState('result');
//     const { clubResultItems, clubPlayersList, clubInfoItems, aa } = UseClubInfoContext();
//     const [clubResultItem, setClubResultItem] = useState({});
//     const [clubPlayers, setClubPlayers] = useState();
//     const [clubInfoItem, setClubInfoItem] = useState({});

//     const clubId = useLocation().state.clubId;

//     useEffect(() => {
//         setClubInfoItem(clubInfoItems.filter((item) => item.team_id === clubId)[0]);
//         setClubResultItem(clubResultItems.filter((item) => (item.team.id === clubId))[0]);
//         setClubPlayers(clubPlayersList);
//     }, []);

//     const { founded, logo, name, venue_address, venue_city, venue_name } = clubInfoItem;

//     return (

//         <section className={styles.clubInfoPage}>
//             <h1>sssssssssss</h1>
//             <div className={styles.clubInfoPageBanner}>
//                 <div className={styles.ss}></div>
//                 <span className={styles.bannerImg}></span>

//                 <div className={styles.clubInfo}>
//                     <div className={styles.clubLogo}>
//                         <span className={styles.clubLogoInner}>
//                             <img src={clubInfoItem && logo} alt='club_img' />
//                         </span>
//                     </div>
//                     <div className={styles.clubInfoTxt}>
//                         <h1>{clubInfoItem && name}</h1>
//                         <p>{clubInfoItem && venue_name}</p>
//                         <p>{clubInfoItem && venue_address} / {clubInfoItem && venue_city}</p>
//                         <p>{clubInfoItem && founded}</p>
//                     </div>
//                 </div>

//                 <div className={styles.buttons}>
//                     <button onClick={() => setDisplayStatus('result')}>OverView</button>
//                     <button onClick={() => setDisplayStatus('clubPlayers')}>Squad</button>
//                 </div>
//             </div>


//             {displayStatus === 'result' ?
//                 <ClubResult clubResultItem={clubResultItem} />
//                 : <ClubSquad clubPlayers={clubPlayers} />}
//         </section>


//     );
// };

// export default ClubInfoPage;
