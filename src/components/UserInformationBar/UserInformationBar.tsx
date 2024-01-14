import React from "react";
import s from './UserInformationBar.module.scss';
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import { usersSlice } from "../../store/users/slice";
import { StatisticsChart } from "../StatisticsChart/StatisticsChart";
import { UserInfoTable } from "../UserInfoTable/UserInfoTable";



export const UserInformationBar: React.FC = () => {
    const dispatch = useAppDispatch();
    const { userInformationBar } = useAppSelector(state => state.usersSlice);
    const { selectedUser } = useAppSelector(state => state.usersSlice);


    return (
        <div className={userInformationBar ? s.userInformationBar : `${s.userInformationBar} ${s.hidden}`}>
            <div className={ s.layout} onClick={() => dispatch(usersSlice.actions.setUserInformationBar(false))}/>
            <div className={s.bar}>
                <div className={ s.userInfoAndActions}>
                    <span className={s.email}>{selectedUser.email}</span>
                    <span className={s.close} onClick={() => dispatch(usersSlice.actions.setUserInformationBar(false))}>𐌗</span>
                </div>

                <div className={s.chart}>
                    <h3>Использование токенов</h3>
                    <StatisticsChart />
                </div>
                <div className="line"/>
                <UserInfoTable/>
            </div>
        </div>
    );
};