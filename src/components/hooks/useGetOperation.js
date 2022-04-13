import { useState, useEffect } from "react";
import axios from "axios";

const useGetOperation = (url) => {
    const [data, setData] = useState(null);
    console.log("i updated")
    useEffect(() => {
        async function getWritten() {
            let value = await axios.get('http://localhost:8080/api/written/all')
            setData(value.data)
        }
        getWritten()
    }, [url]);

    return data;
};

export default useGetOperation;