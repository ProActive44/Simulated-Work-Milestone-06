import React from "react";
import { Link } from "react-router-dom";
import LargeNav from "../components/headers/LargeNav/LargeNav";
import MobileNav from "../components/headers/MobileNav/MobileNav";

export default function Home(){
    return(
        <div className="home">
        
            <div className="hidden md:block">
                <LargeNav/>
            </div>
            <div className="md:hidden">
                <MobileNav/>
            </div>
        </div>
    )
   
}