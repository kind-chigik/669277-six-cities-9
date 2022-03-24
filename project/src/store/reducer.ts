import {combineReducers} from '@reduxjs/toolkit';
import {Process} from '../const';
import {userProcess} from '../store/user-process/user-process';
import {appProcess} from '../store/app-process/app-process';
import {dataProcess} from '../store/data-process/data-process';

const reducer = combineReducers({
  [Process.Data]: dataProcess.reducer,
  [Process.App]: appProcess.reducer,
  [Process.User]: userProcess.reducer,
});

export {reducer};
