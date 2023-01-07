import React, { useEffect, useState } from 'react';
import styles from './club_info_page.module.css';
import ClubResult from '../../components/club_Info/club_info';
import ClubSquad from '../../components/club_squad/club_squad';
import { useLocation } from 'react-router-dom';
import { UseDataContext } from '../../context/dataContext';


const ClubInfoPage = (props) => {

    const LOADINGIMG = 'http://localhost:3000//imgs/loading.png';

    const [displayStatus, setDisplayStatus] = useState('result');
    const [clubInfoItem, setClubInfoItem] = useState([]);
    const [clubResultItem, setClubResultItem] = useState({});
    const [clubPlayersList, setClubPlayersList] = useState([]);



    const { getData } = UseDataContext();
    const clubId = useLocation().state.clubId;
    useEffect(() => {
        getData.readInfoPageData(clubId)//
            .then(result => {
                setClubInfoItem(result.clubInfoItem);
                setClubResultItem(result.clubResultItems);
                setClubPlayersList(result.clubSquad);
            });
    }, [clubId]);

    const { founded, logo, name, venue_address, venue_city, venue_name } = clubInfoItem;

    return (

        <section className={styles.clubInfoPage}>
            <div className={styles.clubInfoPageBanner}>
                <div className={styles.ss}></div>
                <span className={styles.bannerImg}></span>
                <div className={styles.clubInfo}>
                    <div className={styles.clubLogo}>
                        <span className={styles.clubLogoInner}>
                            <img src={(clubInfoItem && logo) || LOADINGIMG} alt='club_img' />
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

            {displayStatus === 'result' ? //하위 컴포넌트 객체가 랜더링이 안되서 일단 이걸로 유효성 평가함
                (Object.keys(clubResultItem).length > 0 && <ClubResult clubResultItem={clubResultItem} />)
                : <ClubSquad clubPlayers={clubPlayersList} />}
        </section>


    );
};

export default ClubInfoPage;