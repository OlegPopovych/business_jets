

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './store';
import { User } from '../types/type';
import { LoadingStatus } from '../types/enums';
import { getUsers } from '../app/api/usersApi';

type initialType = {
  data: User[];
  usersLoadingStatus: LoadingStatus;
};

const initialState: initialType = {
  data: [],
  usersLoadingStatus: LoadingStatus.Loading,
};

export const fetchUsers = createAsyncThunk(
  'fetchUsers',
  async () => {
      const res = await getUsers();

      return res;
  },
);

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.usersLoadingStatus = LoadingStatus.Loading;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.usersLoadingStatus = LoadingStatus.Pending;
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.usersLoadingStatus = LoadingStatus.Error;
      })
      .addDefaultCase(() => {});
  },
});

export const selectUsers = (state: RootState) => state.users.data;
export const selectUsersLoadingStatus = (state: RootState) => state.users.usersLoadingStatus;

export default usersSlice.reducer;
