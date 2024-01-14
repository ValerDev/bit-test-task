import React from "react";
import s from './UserInfoTable.module.scss';
import { TableHeader } from "./TableHeader";
import { useAppSelector } from "../../hooks/storeHooks";
import { Row } from "./Row";
import { Loader } from "../Loader/Loader";



export const UserInfoTable: React.FC = () => {
    const { selectedUser } = useAppSelector(state => state.usersSlice);

    return (
        <div className={s.userInfoTable}>
            <h3>История операций</h3>
            <TableHeader />
            <div className={s.content}>
                {
                    selectedUser.data.length ? selectedUser.data.map((e) => <Row type={e.type} sum={e.value} date={e.date} color={e.color}></Row>) : <Loader />
                }
            </div>
        </div>
    );
};


