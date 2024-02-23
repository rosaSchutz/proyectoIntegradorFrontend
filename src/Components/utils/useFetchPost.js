import { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';

export function useFetchPost(url) {
    const [data, setData] = useState(null);

    const fetchData = async (product) => {
        try {
            const response = await axios.post(url, product);
            setData(response.data);
            Swal.fire({
                title: "Creado!",
                text: "Su producto ha sido creado exitosamente.",
                icon: "success",
                color: "#01284d",
                confirmButtonColor: "#5ba8d4",
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return { fetchData };
}
