import React from "react";
import c from './Profile.module.css'

export const Profile = () => {
    return (
        <div className={c.content}>
            <img src='https://get.wallhere.com/photo/2560x1440-px-lake-Norway-reflection-village-1042496.jpg'/>
            <div>ava+disc</div>
            <div className={c.item}>post</div>
            <div className={c.item}>post</div>
            <div className={c.item}>post</div>
            <div className={c.item}>post</div>
        </div>
    )
}