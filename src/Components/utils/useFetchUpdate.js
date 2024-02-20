import { useState, useEffect } from "react";

export function useFetchUpdate(url) {
    const [data, setData] = useState(null);

    //'https://jsonplaceholder.typicode.com/posts/1'
    
    useEffect(() => {
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => setData(data))
    })

    return { data };
}