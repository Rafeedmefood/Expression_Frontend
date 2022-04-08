import React, {useEffect, useState} from "react";
import {BsYoutube, BsGithub, BsInstagram, BsLinkedin} from "react-icons/bs";

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

    const onClick = (link) => {
        window.open(link)
    }

    return (
        <div className="bg-red-forest w-full h-full min-h-screen min-w-full">
            {isGeneralBioInfoHidden &&
                <div className="flex justify-center items-center">
                    <div className="rounded-3xl flex justify-center items-center bg-green-600 p-5 w-[30%] h-[40%] m-[10%] shadow-lg shadow-gray-700">
                            <img className="rounded-3xl max-h-[400px] max-h-[300px] animate-fade-in-up" src={require("../images/contact.jpg")}/>
                        <div className="p-5 bg-purple-200 rounded-3xl shadow-lg shadow-gray-700 animate-fade-in-up">
                            <h1 className=""> About Me </h1>
                            <p>

                            </p>
                        </div>
                    </div>
                </div>
            }
            {isContactInfoHidden &&
                <div className="flex justify-center items-center">
                    <button className="icons text-black hover:text-white animate-fade-in-up m-10"
                            onClick={() => onClick("https://github.com/Rafeedmefood")}>
                        <Icons icon={<BsGithub size={50}/>} text="GitHub"/>
                    </button>

                    <button className="icons text-blue-700 hover:text-cyan-300 animate-fade-in-up m-10"
                            onClick={() => onClick("https://www.linkedin.com/in/rafidslink/")}>
                        <Icons icon={<BsLinkedin size={50}/>} text="LinkedIn"/>
                    </button>

                    <button className="icons text-red-700 hover:text-pink-500 animate-fade-in-up m-10"
                            onClick={() => onClick("https://www.youtube.com/channel/UCcduTzZiDa5yKburK2otJzQ")}>
                        <Icons icon={<BsYoutube size={50}/>} text="Youtube"/>
                    </button>

                    <button className="icons text-purple-400 hover:text-yellow-300 animate-fade-in-up m-10"
                            onClick={() => onClick("https://www.instagram.com/rafeedmefood/")}>
                        <Icons icon={<BsInstagram size={50}/>} text="Instagram"/>
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