import { useState } from "react";
import Swal from 'sweetalert2';

export function useFetchPost(url) {
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
            Swal.fire({
                title: "Creado!",
                text: "Su producto ha sido creado exitosamente.",
                icon: "success",
                color: "#01284d",
                confirmButtonColor: "#5ba8d4",
            });
            setData(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return { data, fetchData };
}