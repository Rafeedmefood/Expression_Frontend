import React from "react";
import {Link} from "react-router-dom";
import {BiHomeHeart} from "react-icons/bi";
import {GiWrappedHeart} from "react-icons/gi";
import {AiOutlineContacts} from "react-icons/ai";


function Navigation() {
    return (
        <div className="fixed w-full z-1 mx-0 my-0">
            <div className="">
                <Link className="float-right  icons text-orange-700 hover:bg-pink-700 hover:text-cyan-300" to="/"> <Icons icon={<BiHomeHeart size={25}/>} text={"Home"}/> </Link>
                <Link className="float-right  icons text-rose-600 hover:bg-pink-700 hover:text-cyan-300" to="/Expression"> <Icons icon={<GiWrappedHeart size={20}/>} text={"Expression"}/> </Link>
                <Link className="float-right  icons text-yellow-500 hover:bg-pink-700 hover:text-cyan-300" to="/Contacts"> <Icons icon={<AiOutlineContacts size={26}/>} text={"Contacts"}/> </Link>
            </div>
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

export default Navigation;