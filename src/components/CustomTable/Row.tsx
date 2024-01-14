import React from "react";
import s from './Row.module.scss';
import edit from '../../assets/icons/edit.png'
import trash from '../../assets/icons/trash.png'
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import { usersSlice } from "../../store/users/slice";

interface Props {
    email: string;
    name: string;
    role: string;
    subscribe: string;
    token: string;
}

export const Row: React.FC<Props> = ({
    email,
    name,
    role,
    subscribe,
    token }) => {
    const dispatch = useAppDispatch();
    const { userInformationBar } = useAppSelector(state => state.usersSlice);

    const selectUser = () => {
        dispatch(usersSlice.actions.setUserInformationBar(true));
        dispatch(usersSlice.actions.setSelectedUser({
            email,
        }))
    }
    return (
        <>
            <div className={s.row} onClick={selectUser}>
                <p>{email}</p>
                <p>{name}</p>
                <p>{role}</p>
                <p>{subscribe}</p>
                <p>{token} TKN</p>
                <div className={s.actions}>
                    <img src={edit} alt="edit" />
                    <img src={trash} alt="trash" />
                </div>
            </div>
            <div className="line" />
        </>
    );
};