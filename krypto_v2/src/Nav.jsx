import styles from './style/style.module.scss';
import { NavLink } from "react-router-dom";

import { useRef, useEffect, useState } from 'react'
import useApp from './store/useApp';

export default function Nav({ }) {
    const nav = [
        {
            label:"Home",
            path:"/"
        },
        {
            label:"Blogs",
            path:"/blogs"
        },
        {
            label:"Contact",
            path:"/contact"
        }
    ]
    return <div className={styles.navigation}>
        <div className={styles.navigation_logo}></div>
        <nav>
            <ul className={styles.navigation_items}>
                {nav.map(function(element, i) {
                    return <li>
                        <NavLink key={i} className={({ isActive }) => (isActive ? styles.active : '')} to={element.path} >{element.label}</NavLink>
                    </li>
                })}                
            </ul>
        </nav>
    </div>
}