import React from "react";
import n from './Navbar.module.css'

export const Navbar=()=> {
    return (
        <nav className={n.nav}>
            <div className={n.item}>Profile</div>
            <div><a>Message</a></div>
            <div><a>News</a></div>
            <div><a>Music</a></div>
            <div> </div>
            <div> </div>
            <div><a>Settings</a></div>


        </nav>
    )
}