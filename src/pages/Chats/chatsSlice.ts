import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';
import { ChatsType } from '../../components/types';

export interface ChatState {
  chats: ChatsType;
  selectedId: string;
}
const initialState: ChatState = {
  chats: {},
  selectedId: '',
};
const chatsSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    addChat(state, action) {
      state.chats[action.payload.id] = {
        name: action.payload.name,
        messages: [],
      };
    },
    deleteChat(state, action) {
      delete state.chats[action.payload];
    },
    addMessage(state, action) {
      const { selectedId } = state;
      const { text, author, id } = action.payload;
      state.chats[selectedId].messages.push({ id, text, author });
    },
    setSelectedId(state, action) {
      state.selectedId = action.payload;
    },
  },
});
export const selectSelectedId = (state: RootState) =>
  state.chatsState.selectedId;
export const selectChats = (state: RootState) => state.chatsState.chats;
export const { addChat, deleteChat, addMessage, setSelectedId } =
  chatsSlice.actions;
export default chatsSlice.reducer;
