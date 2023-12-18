import {About} from "@/pages/about";
import React from 'react';
import {Outlet} from "react-router-dom";
import styles from './app.module.scss'

export const App = () => {

    console.log(__PLATFORM__)

    return (
        <div className={styles.div}>
            Hello World asdf

            <Outlet/>
            <About/>
        </div>
    );
};