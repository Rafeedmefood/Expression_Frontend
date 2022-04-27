import React from "react";
import {useNavigate} from 'react-router-dom';
import useGetOperation from "./hooks/useGetOperation";

function Videos() {
    const data = useGetOperation("https://expression-backend.herokuapp.com/api/video/all");
    const navigate = useNavigate()

    const handleClick = (id) => {
        navigate(`/Expression/video/${id}`)
    }

    return (
        <div className="bg-camera w-full h-full min-h-screen min-w-full">
            <div className={"flex justify-center items-center h-full w-full"}>
                <div>
                    <h1 className={"text-center mt-[4.5%] font-Akshar text-[25px] text-white"}>Videos</h1>
                    <div className={"flex justify-center text-center "}>
                        {data &&
                            data.map(piece => {
                                return (
                                    <div key={piece.id} onClick={() => handleClick(piece.id)}
                                         className="home-cards bg-blue-300 flex-wrap m-[5%] w-[20%] min-h-[155px] ">
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

export default Videos;