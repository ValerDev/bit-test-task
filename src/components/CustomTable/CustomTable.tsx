import React, { useEffect, useState } from "react";
import s from './CustomTable.module.scss';
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import { getUsersThunk, searchUsersThunk } from "../../store/users/thunk";
import search from '../../assets/icons/search-circle.png';
import { TableHeader } from "./TableHeader";
import { Loader } from "../Loader/Loader";
import { Row } from "./Row";
import { useInputDebaunce } from "../../hooks/useDebaunce";
import { Pages } from "./Pages";

export const CustomTable: React.FC = () => {
    const dispatch = useAppDispatch();
    const { users, isLoading } = useAppSelector(state => state.usersSlice);
    const [page, setPage] = useState<number>(0);
    const limit: number = 8;

    const searchUsers = async (value: string) => {
        await dispatch(searchUsersThunk(value))
    }

    const input = useInputDebaunce('', 0.5, searchUsers);

    useEffect(() => {
        const init = async () => {
            await dispatch(getUsersThunk({ limit: 8, skip: page * limit }));
        }
        init();
    }, [page]);


    return (
        <div className={s.customTable}>
            <div className={s.searchBlock}>
                <img src={search} alt="search" />
                <input {...input} className={s.search} placeholder="Поиск" />
            </div>
            <TableHeader />
            {isLoading ?
                <Loader /> :
                users.length ?
                    users.map((user: any) => <Row
                        key={user.id}
                        email={user.email}
                        name={user.firstName}
                        role={'USER'}
                        subscribe={'Free'}
                        token={`${user.age * 1000}`}
                    />) :
                    <span style={{ margin: '0 auto' }}>No data</span>}
                    <Pages setPage={setPage} page={page} limit={limit}/>
        </div>
    );
};

