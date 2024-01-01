import React, { createContext, useContext } from "react";

const DataContext = createContext(0);

export const DataProvider = ({ children }) => {
    const [data, setData] = useState({})
    const setValues = (values) => {
        setData(prevData => ({
            ...prevData,
            ...values
        }))
    }
    return (
        <DataContext.Provider value= {{ data, setValues }
}>
    { children }
    < /DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext)