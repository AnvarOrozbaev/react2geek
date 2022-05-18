import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';
export interface ProfileState {
  isChecked: boolean;
  name: string;
  auth: boolean;
}
const initialState: ProfileState = {
  isChecked: false,
  name: '',
  auth: false
};
const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    checkboxToggled(state) {
      state.isChecked = !state.isChecked;
    },
    checkboxSetTrue(state) {
      state.isChecked = true;
    },
    changeName(state, action) {
      state.name = action.payload;
    },
    changeAuth: (state, action) => {
      state.auth = action.payload;
    },
  },
});
export const selectIsChecked = (state: RootState) => state.profile.isChecked;
export const selectName = (state: RootState) => state.profile.name;
export const selectAuth = (state: RootState) => state.profile.auth;
export const { checkboxToggled, changeName, checkboxSetTrue, changeAuth } =
  profileSlice.actions;
export default profileSlice.reducer;
