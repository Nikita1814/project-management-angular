import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from '../types';

const selectUserFeature = createFeatureSelector<User>('user');

export const selectUser = createSelector(
  selectUserFeature,
  (state: User ) => state
);
