import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from '../types';

const selectUserFeature = createFeatureSelector<AuthState>('user');

export const selectUser = createSelector(
  selectUserFeature,
  (state: AuthState) => state.user,
);

export const selectUserError = createSelector(
  selectUserFeature,
  (state: AuthState) => state.authError,
);
