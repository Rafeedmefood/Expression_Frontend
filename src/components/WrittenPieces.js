import React from "react";
import { useNavigate } from 'react-router-dom';
import useGetOperation from "./hooks/useGetOperation";

function WrittenPieces() {
    const data = useGetOperation("http://localhost:8080/api/written/all");
    const navigate = useNavigate()

    const handleClick = (id) => {
      navigate(`/Expression/written/${id}`)
    }

    return(
        <div className="bg-skyline w-full h-full min-h-screen min-w-full">
            <div className={"flex justify-center items-center h-full w-full"}>
                <div>
                    <h1 className={"text-center mt-[5%] font-bold"}>Written Pieces</h1>
                    <div className={"flex justify-center text-center "}>
                        {data &&
                            data.map(piece => {
                                return (
                                    <div key={piece.id} onClick={() => handleClick(piece.id)} className="home-cards flex-wrap m-[5%] w-[20%] min-h-[150px] ">
                                        <h2 className="home-titles">{piece.title}</h2>
                                        <p>
                                            {piece.description}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WrittenPieces;