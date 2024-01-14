import React from "react";
import s from './Header.module.scss';
import frame from '../../assets/icons/Frame.png';
import defaultAvatar from '../../assets/icons/default-avatar.png';

export const Header: React.FC = () => {

    return (
        <div className={s.header}>
            <div className={s.leftSide}>
                <div className={s.logo}>BitTest</div>
                <div className={s.info}>
                    <img src={frame} alt="frame" />
                    <span>Моя организация</span>
                </div>
            </div>
            <div className={s.rightSide}>
                <img src={defaultAvatar} alt="defaultAvatar" />
                <div className={s.info}>
                    <span className={s.status}>Вы авторизованы</span>
                    <span className={s.role}>Администратор</span>
                </div>
            </div>
        </div>
    );
};