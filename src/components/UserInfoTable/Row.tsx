import React from "react";
import s from './Row.module.scss';

interface Props {
    type: string;
    sum: number;
    date: Date;
    color: string;
}

export const Row: React.FC<Props> = ({ type, sum, date, color }) => {

    return (
        <>
            <div className={s.row} >
                <p>{type}</p>
                <p style={{ color: color }}>{type === 'Списание' ? '-' : '+'}{sum}</p>
                <p>{date.toLocaleString().split(',')[0]}, <br /> {date.toLocaleString().split(',')[1]}</p>
            </div>
            <div className="line" />
        </>
    );
};