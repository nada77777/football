import { createContext, useContext, useEffect, useState } from "react";
import { firebase } from "../firebase/firebase";
import { GetData } from "../firebase/get_data";

const getdata = new GetData(firebase.options.databaseURL);

const topScoreContext = createContext();

export function TopScoreContextProvider({ children }) {
    const [topScoreItems, setTopScoreItems] = useState();
    const [topPlayer, setTopPlayer] = useState({});

    useEffect(() => {
        // getTopScoreData();
        getdata.readTopScoreData()//
            .then(result => {
                setTopScoreItems(result[0].slice(0, 11));
                setTopPlayer(result[1]);
            });
    }, []);



    const changeProfile = (profile) => {
        setTopPlayer(profile);
    };


    return (
        <topScoreContext.Provider value={{ topScoreItems, topPlayer, changeProfile }}>
            {children}
        </topScoreContext.Provider>
    );
};

export function UseTopScoreContext() {
    return useContext(topScoreContext);
};

