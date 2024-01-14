import React from "react";
import s from './Dashboard.module.scss';
import { CustomTable } from "../CustomTable/CustomTable";
import { Header } from "../Header/Header";

export const Dashboard: React.FC = () => {
   
    return (
        <div className={s.dashboard}>
            <Header/>
            <CustomTable/>
        </div>
    );
};