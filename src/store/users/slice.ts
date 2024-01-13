import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { UsersState } from './types';
import { getUsersThunk, searchUsersThunk } from './thunk';


const initialState: UsersState = {
    users: [],
    isLoading: false,
    error: null,
    total: 0, 
};


export const usersSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      sortUsersByTokens: (state, action) => {
        action.payload ? state.users.sort((firstItem: any, secondItem: any) => (firstItem.age < secondItem.age ? -1 : 0)) : 
        state.users.sort((firstItem: any, secondItem: any) => (firstItem.age > secondItem.age ? -1 : 0))
      }
    },
    extraReducers: (builder: ActionReducerMapBuilder<UsersState>) => {
        builder
          .addCase(getUsersThunk.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(getUsersThunk.fulfilled, (state, action) => {
            state.total = action.payload.total;
            state.users = action.payload.users
            state.isLoading = false;
          })
          .addCase(getUsersThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
          });

          builder
          .addCase(searchUsersThunk.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(searchUsersThunk.fulfilled, (state, action) => {
            state.users = action.payload.users
            state.isLoading = false;
          })
          .addCase(searchUsersThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
          });
      },
})

export default usersSlice.reducer