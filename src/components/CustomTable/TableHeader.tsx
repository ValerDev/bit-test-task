import React, {  useState } from "react";
import s from './TableHeader.module.scss';
import { useAppDispatch,  } from "../../hooks/storeHooks";
import { usersSlice } from "../../store/users/slice";

export const TableHeader: React.FC = () => {
    const dispatch = useAppDispatch();
    const [fromLow, setFromLow] = useState<boolean>(false);
    const [isSorted, setIsSorted] = useState<boolean>(false);

    const sortUsers = (fromLow: boolean) => {
        setIsSorted(true)
        dispatch(usersSlice.actions.sortUsersByTokens(fromLow));
        setFromLow(fromLow);
    }

    return (
        <div className={s.tableHeader}>
            <p>Email</p>
            <p>Имя</p>
            <p>Роль</p>
            <p>Подписка</p>
            <p onClick={() => sortUsers(!fromLow)}>Токены {!isSorted ? '' : fromLow ? '↑' : '↓'} </p>
            <p>Действия</p>
        </div>
    );
};