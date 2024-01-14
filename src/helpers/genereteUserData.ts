import { userData } from "../store/users/types";

export const genereteUserData = () => {
    const today = new Date();
    const startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0, 0);
    const data: userData[] = [];

    for (let i = 0; i < 50; i++) {
        const currentDate = new Date(startDate);
        currentDate.setHours(startDate.getHours() + i);
        const value = Math.floor(Math.random() * 1000);
        const type = i % 2 === 0 ? 'Списание' : 'Пополнение';
        const color = type === 'Списание' ? '#FE4242' : '#1ABB34';
        data.push({ date: currentDate, value, type, color });
    }

    return data
}