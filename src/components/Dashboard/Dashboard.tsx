import React from "react";
import s from './Dashboard.module.scss';
import { CustomTable } from "../CustomTable/CustomTable";

export const Dashboard: React.FC = () => {
   
    return (
        <div className={s.dashboard}>
            <h3 className={s.title}>Моя организация</h3>
            <div className="line" />
            <h3 className={s.title}>Пользователи</h3>
            <CustomTable/>
        </div>
    );
};