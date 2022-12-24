import { createContext, useContext, useEffect, useState } from "react";

const topScoreContext = createContext();

export function TopScoreContextProvider({children}){
    const [topScoreItems, setTopScoreItems] = useState();
    const [topPlayer, setTopPlayer] = useState({});

    // useEffect(() => {
    //     fetch('data/topScore.json')
    //     .then(response => response.json())
    //     .then(response => response.response)
    //     .then(result => {setTopScoreItems(result.slice(0,11))
    //                     setTopPlayer(result[0])});
    // },[]);


    useEffect(() => {
        getTopScoreData();
        console.log('ssssss');
    },[]);

     const getTopScoreData = ()  => {
        fetch('data/topScore.json')
        .then(response => response.json())
        .then(response => response.response)
        .then(result => {setTopScoreItems(result.slice(0,11))
                        setTopPlayer(result[0])});
    };

    const changeProfile = (profile) => {
        setTopPlayer(profile);
    };


    return(
        <topScoreContext.Provider value={{topScoreItems, topPlayer, changeProfile}}>
            {children}
        </topScoreContext.Provider>
    );
};

export function UseTopScoreContext() {
    return useContext(topScoreContext);
};

