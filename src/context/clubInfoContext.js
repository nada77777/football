import { createContext, useContext, useEffect, useState } from "react";

const clubInfoContext = createContext();

export function ClubInfoContextProvider({ children }) {
    const [clubResultItem, setClubResultItem] = useState();
    const [clubPlayers, setClubPlayers] = useState();
    const [clubInfoItem, setClubInfoItem] = useState({});
    const [clubInfoItems, setClubInfoItems] = useState([]);
    useEffect(() => {
        fetch('data/teams.json')//
            .then(result => result.json())//
            .then(result => setClubInfoItems(result.api.teams));
        console.log('ccccccccccccccccccccc');
    }, []);

    const getClubInfo = (clubId, clubResult) => {
        console.log(clubId);
        fetch('data/players_of_team.json')//
            .then(result => result.json())//
            .then(result => {
                setClubPlayers(result.response[0].players.slice(0));
            });
        clubInfoItems.filter((item) => item.team_id === clubId ? setClubInfoItem(item) : undefined);
        setClubResultItem(clubResult);

        console.log(clubInfoItem);
    };


    return (
        <clubInfoContext.Provider value={{ getClubInfo, clubInfoItem, clubResultItem, clubPlayers }}>
            {children}
        </clubInfoContext.Provider>
    );
};

export function UseClubInfoContext() {
    return useContext(clubInfoContext);
};
