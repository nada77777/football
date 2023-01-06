import { createContext, useContext } from "react";
import { firebase } from "../firebase/firebase";
import { GetData } from "../firebase/get_data";

const getData = new GetData(firebase.options.databaseURL);

export const DataContext = createContext();

export function DataContextProvider({ children }) {
    console.log('sssss');
    return (
        <DataContext.Provider value={{ getData }}>
            {children}
        </DataContext.Provider>
    );
};

export function UseDataContext() {
    return useContext(DataContext);
};