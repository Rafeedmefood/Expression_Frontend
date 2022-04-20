import React from "react";
import {useParams} from "react-router-dom";
import useGetOperation from "./hooks/useGetOperation";

function WrittenViewer() {
    const {id} = useParams();
    const data = useGetOperation(`http://localhost:8080/api/written/${id}`)

    return (
        <div className="bg-mountain-sky w-full h-full min-h-screen min-w-full">
            <div className={"flex justify-center items-center h-full w-full"}>
                    <div className={"flex justify-center text-center "}>
                        {data &&
                            <div key={data.id}
                                 className="home-cards flex-wrap m-[5%] ">
                                <h2 className="home-titles">{data.title}</h2>
                                <p>
                                    {data.description}
                                </p>
                            </div>
                        }
                    </div>
                </div>
        </div>
    )
}

export default WrittenViewer;