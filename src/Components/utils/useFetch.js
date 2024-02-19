import { useState, useEffect } from "react";

export function useFetch(url) {
    const [data, setData] = useState(null);

    const fetchData = async (product) => {
        try {
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(product),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [url]);

    return { data, fetchData };
}