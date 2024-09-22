// src/components/NavListItem.js
import React from "react";
import './navListItem.css';

function NavListItem({ nav, NavOnClick }) {
    return (
    <li><a href={nav.link} className={nav.active ? "active" : undefined} onClick={() => NavOnClick(nav._id)}>{nav.name}</a></li>
                    
    );
}

export default NavListItem;
