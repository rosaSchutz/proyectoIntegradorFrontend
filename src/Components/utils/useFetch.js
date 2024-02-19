import { useState, useEffect } from "react";

export function useFecth (url, method) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return { data };
}