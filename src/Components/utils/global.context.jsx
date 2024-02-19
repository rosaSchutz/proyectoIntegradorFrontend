import axios from 'axios'
import { useReducer } from 'react'
import { createContext, useContext, useEffect } from 'react'

const ContextGlobal = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_DATA_ODONTOLOGOS':
            return { ...state, data: action.payload }
    }
}

const initialState = {
    theme: "",
    data: [],
    favs: [],
}

const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const url = "https://jsonplaceholder.typicode.com/users";

    useEffect(() => {
        axios(url)
            .then(res => dispatch({ type: 'GET_DATA_ODONTOLOGOS', payload: res.data }))
            .catch(error => console.error('Error fetching data:', error));
    }, []);


    return (
        <ContextGlobal.Provider value={{
            state, dispatch,
        }}>
            {children}
        </ContextGlobal.Provider>
    );
};

export default ContextProvider

export const useContextGlobal = () => useContext(ContextGlobal)