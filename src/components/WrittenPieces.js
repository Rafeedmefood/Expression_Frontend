import React from "react";
import useGetOperation from "./hooks/useGetOperation";

function WrittenPieces() {
    const data = useGetOperation("http://localhost:8080/api/written/all");


    const handleClick = () => {
        console.log(data)

    }

    return(
        <button className="mt-96" onClick={handleClick}>Print Written</button>
    )
}

export default WrittenPieces;