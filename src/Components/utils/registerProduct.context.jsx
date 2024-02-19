import axios from 'axios'
import { useReducer } from 'react'
import { createContext, useContext, useEffect } from 'react'

const ContextGlobal = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'POST_DATA':
            return { ...state, data: action.payload }
    }
}

const initialState = {
    data: [],
}

const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const url = "https://jsonplaceholder.typicode.com/posts";

    useEffect(() => {
        axios(url)
            .then(res => dispatch({ type: 'POST_DATA', payload: res.data }))
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

export const useContextGlobalRegisterProduct = () => useContext(ContextGlobal)