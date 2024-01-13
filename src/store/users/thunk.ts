
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUsers, searchUsers } from '../../api/user/userService';


export const getUsersThunk = createAsyncThunk('user/getUsers', async (data: {limit: number, skip: number}) => {
    const response = await getUsers(data)
    return response
});

export const searchUsersThunk = createAsyncThunk('user/searchUsers', async (name: string) => {
    const response = await searchUsers(name);
    return response
});



