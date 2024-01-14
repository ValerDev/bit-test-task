import React from "react";
import s from './Pages.module.scss';
import { useAppSelector } from "../../hooks/storeHooks";

interface Props {
    limit: number,
    page: number,
    setPage: (page: number) => void;
}
export const Pages: React.FC<Props> = ({ page, setPage, limit }) => {
    const { total } = useAppSelector(state => state.usersSlice);
    const pagesCount = Math.floor(total / limit);
    return (
        <div className={s.pages}>
            <button onClick={() => setPage(page - 1)} disabled={page === 1} style={{ opacity: page === 1 ? '.3' : '1' }}>←</button>
            {page === pagesCount && <button onClick={() => setPage(page - 3)}>{page - 3}</button>}
            {page > 2 && <button onClick={() => setPage(page - 2)}>{page - 2}</button>}
            {page > 1 && <button onClick={() => setPage(page - 1)}>{page - 1}</button>}
            <button className={s.active} >{page}</button>
            {page < pagesCount && <button onClick={() => setPage(page + 1)}>{page + 1}</button>}
            {!(page > 2) && <button onClick={() => setPage(page + 2)}>{page + 2}</button>}
            {!(page > 1) && <button onClick={() => setPage(page + 3)}>{page + 3}</button>}

            {page < 9 && <>
                <button style={{ pointerEvents: 'none' }}>...</button>
                <button onClick={() => { setPage(pagesCount) }}>{pagesCount}</button>
            </>}
            <button onClick={() => setPage(page + 1)} disabled={pagesCount <= page} style={{ opacity: pagesCount <= page ? '.3' : '1' }}>→</button>
        </div>
    );
};