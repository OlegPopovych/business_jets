import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { User } from '../types/type';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useThunkDispatch = () =>
  useDispatch<ThunkDispatch<User[], unknown, AnyAction>>();
