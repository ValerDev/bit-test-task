import { useDispatch, useSelector } from 'react-redux'
import type {  UseSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../store/store'

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: UseSelector<RootState> = useSelector;