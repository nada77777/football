import { createContext, useContext, useEffect, useState } from "react";

const StandingsContext = createContext();

export function StandingsContextProvider({children}) {
    const [standingItems, setStandingItems] = useState([]);
    const [logos, setLogos] = useState();
    useEffect(() => {
        fetch('data/standings.json')
        .then(response => response.json())
        .then(result => result.response[0].league.standings[0])
        .then(items => {setStandingItems(items)
                        setLogos(items.map((item) => item.team))})
        .catch(error => console.error(error))

        // setLogos(standingItems.map((item => item.team)));
        // console.log(standingItems.map((item => item.team)));
    },[]);
    return (
        <StandingsContext.Provider value={{standingItems, logos}}>
            {children}
        </StandingsContext.Provider>
    );
};

export function UseStandingsContext() {
    return useContext(StandingsContext);
};