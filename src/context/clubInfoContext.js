import { createContext, useContext, useEffect, useState } from "react";
import { firebase } from '../firebase/firebase';
import { GetData } from '../firebase/get_data';

const getdata = new GetData(firebase.options.databaseURL);

const clubInfoContext = createContext();


export function ClubInfoContextProvider({ children }) {

    const [clubResultItems, setClubResultItems] = useState([]);
    const [clubInfoItems, setClubInfoItems] = useState([]);
    const [clubPlayersList, setClubPlayersList] = useState();


    // clubInfoItem, clubResultItem, clubPlayers
    useEffect(() => {
        // fetch('data/teams.json')//
        //     .then(result => result.json())//
        //     .then(result => setClubInfoItems(result.api.teams));
        // console.log('club context');



        getdata.readClubInfoData()//
            .then(result => setClubInfoItems(result));

        getdata.readStandingsAndClubListData()//
            .then(result => setClubResultItems(result[0]));



        // const clubInfoItem = clubInfoItems.filter((item) => item.team_id === clubId)[0];
        // const clubResultItem = clubResultItems.filter((item) => (item.team.id === clubId))[0];


        // fetch('data/players_of_team.json')//
        //     .then(result => result.json())//
        //     .then(result => {
        //         setClubPlayersList(result.response[0].players.slice(0));
        //     });



        // fetch('data/standings.json')
        //     .then(response => response.json())
        //     .then(result => result.response[0].league.standings[0])
        //     .then(items => setClubResultItems(items));
    }, []);

    const getClubId = (clubId) => {
        getdata.readSquadData(clubId)//
            .then(result => setClubPlayersList(result));

        // getdata.readClubInfoData()//
        //     .then(result => setClubInfoItems(result.filter((item) => item.team_id === clubId)[0]));

        // getdata.readStandingsAndClubListData()//
        //     .then(result => setClubResultItems(result[0].filter((item) => (item.team.id === clubId))[0]));
    };



    // setClubInfoItem(clubInfoItems.filter((item) => item.team_id === clubId)[0]);
    // //         setClubResultItem(clubResultItems.filter((item) => (item.team.id === clubId))[0]);
    // //         setClubPlayer(clubPlayersList);



    // clubInfoItems.filter((item) => setClubInfoItem(item.team_id === clubId));

    return (
        <clubInfoContext.Provider value={{ clubResultItems, clubPlayersList, clubInfoItems, getClubId }}>
            {children}
        </clubInfoContext.Provider>
    );
};

export function UseClubInfoContext() {
    return useContext(clubInfoContext);
};
