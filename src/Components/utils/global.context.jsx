import axios from 'axios'
import { useReducer } from 'react'
import { createContext, useContext, useEffect } from 'react'

const ContextGlobal = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_DATA':
            return { ...state, data: action.payload }
    }
}

const initialState = {
    data: [],
}

//algoritmo de Fisher-Yates para barajar aleatoriamente un array
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const url = "https://jsonplaceholder.typicode.com/photos";

    useEffect(() => {
        axios(url)
            .then(res => {
                // Baraja aleatoriamente los productos
                const shuffledProducts = shuffleArray(res.data);
    
                // Selecciona los primeros 10 productos
                const selectedProducts = shuffledProducts.slice(0, 10);
    
                dispatch({ type: 'GET_DATA', payload: selectedProducts });
            })
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