import { createContext, useContext, useEffect, useState } from "react";

const StandingsContext = createContext();

export function StandingsContextProvider({ children }) {
    const [standingItems, setStandingItems] = useState([]);
    const [clubItems, setClubItems] = useState([]);

    useEffect(() => {
        fetch('data/standings.json')
            .then(response => response.json())
            .then(result => result.response[0].league.standings[0])
            .then(items => {
                setStandingItems(items)
                setClubItems(items.map((item) => ({ team: item.team, result: item.all, rank: item.rank, points: item.points })))
            })
            .catch(error => console.error(error))

        // setLogos(standingItems.map((item => item.team)));
        // console.log(standingItems.map((item => item.team)));
        // standingItems.map((item) => setClubItems(item.team));
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