import { createFeatureSelector, createSelector } from '@ngrx/store';

const selectUserFeature = createFeatureSelector<string>('userToken');

export const selectUser = createSelector(
  selectUserFeature,
  (state: string) => state
);
