import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function Expression() {
    const [showPage, setShowPage] = useState(false)
    const navigate = useNavigate()

    const handleClick = (url) => {
        navigate(url)
    }

    useEffect(() => {
        setTimeout(function () {
            setShowPage(true)
        }, 350);
    }, [])

    return (
        <div className="bg-cliff w-full h-full min-h-screen min-w-full">
            <div className="flex justify-center items-center h-full w-full">
                {
                    showPage &&
                    <div className="mt-[4.5%]">
                        <h1 className="animate-fade-in-up text-center mb-[40%] font-Akshar text-white text-xl">Where
                            Shall We Go Today?</h1>
                        <div className="flex justify-center items-center h-[80px]">
                            <div
                                className='expression-buttons' onClick={() => handleClick('/Expression/notes')}>
                                Notes
                            </div>

                            <div
                                className='expression-buttons' onClick={() => handleClick('/Expression/videos')}>
                                Videos
                            </div>

                            <div
                                className='expression-buttons' onClick={() => handleClick('/Expression/written')}>
                                Written
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Expression;