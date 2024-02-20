import { useState, useEffect } from "react";

export function useFetchDelete(url) {
    const [data, setData] = useState(null);

    useEffect(() => {
        //"https://jsonplaceholder.typicode.com/posts/1"
        fetch(url, {
            method: 'DELETE',
        });
    })

    return { data };
}