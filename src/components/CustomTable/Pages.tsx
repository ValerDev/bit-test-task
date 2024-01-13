import React from "react";
import s from './Pages.module.scss';
import { useAppSelector } from "../../hooks/storeHooks";
import { usersSlice } from "../../store/users/slice";

interface Props {
    limit: number,
    page: number,
    setPage: (page: number) => void;
}
export const Pages: React.FC<Props> = ({ page, setPage, limit }) => {
    const { total } = useAppSelector(state => state.usersSlice);
    console.log(page);

    return (
        <div className={s.pages}>
            <button onClick={() => setPage(page - 1)} disabled={page === 0} style={{ opacity: page === 0 ? '.3' : '1' }}>←</button>
            {[...Array(Math.floor(total / limit) - page < 5 ? Math.floor(total / limit) - page : 4)].map((e, i) => <button onClick={() => {setPage(page + 1)}}>{page + i+1}</button>)}
            <button style={{ pointerEvents: 'none' }}>...</button>
            <button onClick={() => {setPage(Math.floor(total / limit))}}>{Math.floor(total / limit)}</button>
            <button onClick={() => setPage(page + 1)} disabled={Math.floor(total / limit) <= page} style={{ opacity: Math.floor(total / limit) <= page ? '.3' : '1' }}>→</button>
        </div>
    );
};