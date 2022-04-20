import { useState, useEffect } from "react";
import axios from "axios";

const useGetOperation = (url) => {
    const [data, setData] = useState(null);
    console.log(url)
    useEffect(() => {
        async function getWritten() {
            let value = await axios.get(url)
            setData(value.data)
        }
        getWritten()
    }, [url]);

    return data;
};

export default useGetOperation;