import { createContext, useContext, useEffect, useState } from "react";
import { firebase } from "../firebase/firebase";
import { GetData } from "../firebase/get_data";

const getData = new GetData(firebase.options.databaseURL);

export const DataContext = createContext();

export function DataContextProvider({ children }) {
    const [standingItemsData, setStandingItemsData] = useState([]);

    useEffect(() => {
        getData.readStandingsAndClubListData()//
            .then(result => setStandingItemsData(result[0]));
    }, []);

    return (
        <DataContext.Provider value={{ getData, standingItemsData }}>
            {children}
        </DataContext.Provider>
    );
};

export function UseDataContext() {
    return useContext(DataContext);
};