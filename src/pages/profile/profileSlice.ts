import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';
export interface ProfileState {
  isChecked: boolean;
  name: string;
}
const initialState: ProfileState = {
  isChecked: false,
  name: '',
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
  },
});
export const selectIsChected = (state: RootState) =>
  state.profileState.isChecked;
export const selectName = (state: RootState) => state.profileState.name;
export const { checkboxToggled, changeName, checkboxSetTrue } =
  profileSlice.actions;
export default profileSlice.reducer;
