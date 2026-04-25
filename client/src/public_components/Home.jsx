import React from 'react';
import style from "../styles/Home.module.css";
function Home() {
    return (
        <div className={style.main_con}>
            <h1 className={style.welcome_text}>Welcome to HealthBridge</h1>
            <p className={style.msg}>Your one-stop solution for smart healthcare operations.</p>
        </div>
    );
}
export default Home;