import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';
import { ChatsType } from '../../components/types';
import { AUTHOR } from '../../const';
import { nanoid } from 'nanoid';

export interface ChatState {
  chats: ChatsType;
  selectedId: string;
}
const initialState: ChatState = {
  chats: {},
  selectedId: '',
};

let timeout: ReturnType<typeof setTimeout>;
export const addMessagebyBot = createAsyncThunk(
  'chats/addMessagebyBot',
  async (chatId: string, thunkAPI) => {
    const { chatsState } = thunkAPI.getState() as RootState;
    const botMessage = {
      chatId,
      author: AUTHOR.BOT,
      text: 'robot message',
      id: nanoid(),
    };

    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      if (chatId === chatsState.selectedId) {
        thunkAPI.dispatch(addMessage(botMessage));
      }
    }, 1500);
  }
);
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
      const { chatId, text, author, id } = action.payload;
      state.chats[chatId].messages.push({ id, text, author });
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
