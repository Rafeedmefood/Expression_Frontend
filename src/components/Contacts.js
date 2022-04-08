import React, {useEffect, useState} from "react";
import {BsYoutube} from "react-icons/bs";

function Contacts() {
    const [isGeneralBioInfoHidden, setIsGeneralBioInfoHidden] = useState(false)
    const [isContactInfoHidden, setIsContactInfoHidden] = useState(false)

    useEffect(() => {
        setTimeout(function () {
            setIsGeneralBioInfoHidden(true)
        }, 1000);
        setTimeout(function () {
            setIsContactInfoHidden(true)
        }, 2000);

    }, [])

    return (
        <div className="bg-red-forest w-full h-full min-h-screen min-w-full">
            {isGeneralBioInfoHidden &&
                <div className="flex justify-center items-center">
                    <div className="home-cards">
                        <h1 className="home-titles"> GitHub </h1>
                        <p>

                        </p>
                    </div>

                    <div className="home-cards">
                        <h1 className="home-titles"> LinkedIn </h1>
                        <p>

                        </p>
                    </div>

                    <div className="home-cards">
                        <h1 className="home-titles"> Instagram </h1>
                        <p>

                        </p>
                    </div>

                    <div className="home-cards">
                        <h1 className="home-titles"> Youtube </h1>
                        <p>

                        </p>
                    </div>
                </div>
            }
            {isContactInfoHidden &&
                <div className="flex justify-center items-center">

                    <button className="icons text-yellow-500 hover:bg-pink-700 hover:text-cyan-300 w-[5%] h-[45%]">
                        <Icons icon={<BsYoutube size={50} />} text="Youtube"/>
                    </button>

                    <button className="icons text-yellow-500 hover:bg-pink-700 hover:text-cyan-300 w-[5%] h-[45%]">
                        <Icons icon={<BsYoutube size={50} />} text="Youtube"/>
                    </button>

                    <button className="icons text-yellow-500 hover:bg-pink-700 hover:text-cyan-300 w-[5%] h-[45%]">
                        <Icons icon={<BsYoutube size={50} />} text="Youtube"/>
                    </button>

                    <button className="icons text-yellow-500 hover:bg-pink-700 hover:text-cyan-300 w-[5%] h-[45%]">
                        <Icons icon={<BsYoutube size={50} />} text="Youtube"/>
                    </button>
                </div>
            }
        </div>
    )
}

function Icons({icon, text}) {
    return (
        <div className="flex justify-center group">
            {icon}
            <span className="icon-name group-hover:scale-100">
                {text}
            </span>
        </div>
    )
}

export default Contacts;