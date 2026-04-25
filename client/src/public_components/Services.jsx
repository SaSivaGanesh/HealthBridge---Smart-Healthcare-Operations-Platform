import React from 'react';
import style from "../styles/Services.module.css";
import { FaCalendarCheck, FaVideo, FaFileMedical, FaAmbulance } from "react-icons/fa";

function Services() {
    return (
        <div className={style.main_con}>

            {/* HERO SECTION */}
            <div className={style.smart_app}>
                <p className={style.smart_app_title}>Smart HealthBridge Application</p>

                <h1 className={style.smart_app_heading}>
                    Everything You Need,
                </h1>
                <h1 className={style.smart_app_heading_highlight}>
                    All in One Place
                </h1>

                <p className={style.description}>
                    Welcome to the Smart HealthBridge Application! This platform is designed to 
                    revolutionize healthcare operations by leveraging cutting-edge technology and 
                    data-driven insights. Our application offers a comprehensive suite of features 
                    to enhance patient care, streamline administrative tasks, and improve overall 
                    healthcare efficiency.
                </p>

                <button className={style.cta_btn}>Get Started</button>
            </div>

            {/* SERVICES */}
            <div className={style.our_services}>
                <h2>Our Services</h2>

                <div className={style.our_services_list}>

                    <div className={style.service_card}>
                        <FaCalendarCheck className={style.icon}/>
                        <h3>Easy Appointment Booking</h3>
                        <p>
                            Book appointments with healthcare providers in just a few clicks,
                            at your convenience.
                        </p>
                    </div>

                    <div className={style.service_card}>
                        <FaVideo className={style.icon}/>
                        <h3>Video Consultations</h3>
                        <p>
                            Connect with doctors online and receive medical advice without visiting hospitals.
                        </p>
                    </div>

                    <div className={style.service_card}>
                        <FaFileMedical className={style.icon}/>
                        <h3>Medical Records Access</h3>
                        <p>
                            Download and access your medical records anytime with ease.
                        </p>
                    </div>

                    <div className={style.service_card}>
                        <FaAmbulance className={style.icon}/>
                        <h3>Emergency Support</h3>
                        <p>
                            24/7 emergency assistance with quick response from professionals.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Services;