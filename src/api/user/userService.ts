import axios from 'axios';

export const getUsers = async (data: {limit: number, skip: number}) => {
    try {
        const response = await axios.get(`https://dummyjson.com/users?limit=${data.limit}&skip=${data.skip}`);
        
        return response.data;
    } catch (e: unknown) {
        return e
    }
}


export const searchUsers = async (name: string) => {
    try {
        const response = await axios.get(`https://dummyjson.com/users/search?q=${name}`);
        
        return response.data;
    } catch (e: unknown) {
        return e
    }
}