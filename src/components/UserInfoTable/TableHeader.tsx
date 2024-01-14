import React from "react";
import s from './TableHeader.module.scss';

export const TableHeader: React.FC = () => {

    return (
        <div className={s.tableHeader}>
            <p>Тип</p>
            <p>Сумма</p>
            <p>Дата</p>
        </div>
    );
};