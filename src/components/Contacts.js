import React, {useEffect, useState} from "react";
import {BsYoutube, BsGithub, BsInstagram, BsLinkedin} from "react-icons/bs";

function Contacts() {
    const [isGeneralBioInfoHidden, setIsGeneralBioInfoHidden] = useState(false)
    const [isContactInfoHidden, setIsContactInfoHidden] = useState(false)

    useEffect(() => {
        setTimeout(function () {
            setIsGeneralBioInfoHidden(true)
        }, 350);
        setTimeout(function () {
            setIsContactInfoHidden(true)
        }, 800);

    }, [])

    const onClick = (link) => {
        window.open(link)
    }

    return (
        <div className="bg-red-forest w-full h-full min-h-screen min-w-full">
            {isGeneralBioInfoHidden &&
                <div className="flex justify-center items-center">
                    <div
                        className="flex justify-center items-center m-[11%]">
                        <img className="rounded-3xl max-h-[300px] shadow-lg shadow-gray-900 animate-fade-in-up"
                             src={require("../images/contact.jpg")} alt="Rafid Karim"/>
                        <div
                            className="p-5 bg-pink-500 rounded-3xl shadow-lg shadow-gray-900 animate-fade-in-up ml-2.5 m-h-[300px]">
                            <h1 className="font-Akshar font-bold text-[40px]"> About Me </h1>
                            <p className="font-SquarePeg font-semibold text-[25px]">
                                My name is Rafid Karim, and I am a first generation Bengali - American aspiring to become a software engineer. I am
                                currently enrolled in Brooklyn College working towards a Bachelors Degree of Science in Computer Science, and I am part of
                                the Computer Science Club, the Tech Talent Pipeline, and the Cuny 2X Program.
                                I am interested in technology, fashion, and fitness, and am always looking for opportunities to learn and better my craft.
                                I believe that there is always room for improvement, and working towards a goal that I am passionate about is what I believe
                                life is all about. I am always open to talk and answer any questions, so you can contact me through any of the links provided below.
                                Feel free to connect with me on any of the links below! Thanks for dropping by :)
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