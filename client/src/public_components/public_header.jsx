import React from "react";
import { NavLink } from "react-router-dom";
import style from "../styles/public_header.module.css";
function PublicHeader() {
    return (
        <nav className={style.main_con}>
            <div className={style.logo}>
                <h1>🏥 HealthBridge</h1>
            </div>
            <div className={style.nav_links}>
                <NavLink to="/" className={({ isActive }) => isActive ? style.active : style.links}>Home</NavLink>
                <NavLink to="/services" className={({ isActive }) => isActive ? style.active : style.links}>Services</NavLink>
                <NavLink to="/branches" className={({ isActive }) => isActive ? style.active : style.links}>Branches</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? style.active : style.links}>About Us</NavLink>
                <NavLink to="/Login" className={({ isActive }) => isActive ? style.active : style.links}>Login</NavLink>
            </div>
        </nav>
    );
}
export default PublicHeader;