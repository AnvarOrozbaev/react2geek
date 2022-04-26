import { createSlice } from '@reduxjs/toolkit';

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
    changeName(state, action) {
      state.name = action.payload;
    },
  },
});

export const { checkboxToggled, changeName } = profileSlice.actions;
export default profileSlice.reducer;
