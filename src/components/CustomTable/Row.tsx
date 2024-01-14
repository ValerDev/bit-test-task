import React from "react";
import s from './Row.module.scss';
import edit from '../../assets/icons/edit.png'
import trash from '../../assets/icons/trash.png'

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

    return (
        <>
            <div className={s.row}>
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