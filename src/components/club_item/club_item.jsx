import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './club_item.module.css';

const ClubItem = ({ clubItem }) => {
    const navigate = useNavigate();
    const { name, logo, id } = clubItem.team;
    const teamURL = name.replace(/ /g, "");

    const onClick = (event) => {
        event.preventDefault();
        navigate(`/${teamURL}/${id}`, { state: { clubId: id } });
    }

    return (
        <li className={styles.clubItem}>
            <a onClick={onClick} className={styles.clubItemInner} href=" ">
                <div className={styles.background}>
                    <span></span>
                </div>
                <div className={styles.clubLogo}>
                    <span className={styles.clubLogoInner}>
                        <img src={logo} alt='club_img' />
                    </span>
                </div>
                <div className={styles.clubText}>
                    <h1>{name}</h1>
                    <p>Club Profile</p>
                </div>
            </a>
        </li>
    );
};

export default ClubItem;




// %20 url 스페이스 url 인코딩 필요 구라 ㄴ
// url이라 띄어쓰기 %20 나옴 그래서 띄어쓰기 제거 필요
// 정규표현식 사용 a.replace(/ /g,"") //"가나다라마바사" 공부 필 일단 사용