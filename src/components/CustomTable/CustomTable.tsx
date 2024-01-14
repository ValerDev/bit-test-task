import React, { useEffect, useState } from "react";
import s from './CustomTable.module.scss';
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import { getUsersThunk, searchUsersThunk } from "../../store/users/thunk";
import search from '../../assets/icons/search-circle.png';
import { TableHeader } from "./TableHeader";
import { Loader } from "../Loader/Loader";
import { Row } from "./Row";
import { useInputDebaunce } from "../../hooks/useInputDebaunce";
import { Pages } from "./Pages";

export const CustomTable: React.FC = () => {
    const dispatch = useAppDispatch();
    const { users, isLoading } = useAppSelector(state => state.usersSlice);
    const [page, setPage] = useState<number>(1);
    const limit: number = 10;

    const searchUsers = async (value: string) => {
        if (!value) return dispatch(getUsersThunk({ limit: 8, skip: page * limit }));
        await dispatch(searchUsersThunk(value));
    }

    const input = useInputDebaunce('', 0.5, searchUsers);

    useEffect(() => {
        const init = async () => {
            await dispatch(getUsersThunk({ limit: limit, skip: (page - 1) * limit }));
        }
        init();
    }, [page]);


    return (
        <div className={s.customTable}>
            <h3 className={s.title}>Моя организация</h3>
            <div className="line" />
            <h3 className={s.title}>Пользователи</h3>
            <div className={s.searchBlock}>
                <img src={search} alt="search" />
                <input {...input} className={s.search} placeholder="Поиск" />
            </div>
            <div className={s.main}>
                <TableHeader />
                {isLoading ?
                    <Loader /> :
                    users.length ?
                        <div className={s.tableContent}>
                            {
                                users.map((user: any) => <Row
                                    key={user.id}
                                    email={user.email}
                                    name={user.firstName}
                                    role={'USER'}
                                    subscribe={'Free'}
                                    token={`${user.age * 1000}`}
                                />)}
                        </div> :
                        <span style={{ margin: '30px auto' }}>No data</span>}
            </div>
            <Pages setPage={setPage} page={page} limit={limit} />
        </div>
    );
};

