import { createContext, useContext, useEffect, useState } from "react";
import { firebase } from '../firebase/firebase';
import { GetData } from '../firebase/get_data';

const getdata = new GetData(firebase.options.databaseURL);


const StandingsContext = createContext();

export function StandingsContextProvider({ children }) {

    const [standingItems, setStandingItems] = useState([]);
    const [clubItems, setClubItems] = useState([]);

    useEffect(() => {
        getdata.readStandingsAndClubListData()//
            .then(resultItems => {
                setStandingItems(resultItems[0]);
                setClubItems(resultItems[1]);
            });







        // fetch('data/standings.json')
        //     .then(response => response.json())
        //     .then(result => result.response[0].league.standings[0])
        //     .then(items => {
        //         setStandingItems(items)
        //         setClubItems(items.map((item) => ({ team: item.team, result: item.all, rank: item.rank, points: item.points })))
        //     })
        //     .catch(error => console.error(error));

    }, []);


    return (
        <StandingsContext.Provider value={{ standingItems, clubItems }}>
            {children}
        </StandingsContext.Provider>
    );
};

export function UseStandingsContext() {
    return useContext(StandingsContext);
};