import { Action } from 'redux';
import reducer, { addChat, deleteChat, addMessage } from './chatsSlice';

describe('profileReducer', () => {
  const emptyActions: Action = {
    type: '',
  };
  test('should return the initial state', () => {
    expect(reducer(undefined, emptyActions)).toEqual({
      chats: {},
      selectedId: '',
    });
  });
  test('add chat at state', () => {
    const previousState = {
      chats: {},
      selectedId: '',
    };
    expect(reducer(previousState, addChat({ name: 'test', id: '1' }))).toEqual({
      chats: { '1': { name: 'test', messages: [] } },
      selectedId: '',
    });
  });
  test('delete chat', () => {
    const previousState = {
      chats: { '1': { name: 'test', messages: [] } },
      selectedId: '',
    };
    expect(reducer(previousState, deleteChat('1'))).toEqual({
      chats: {},
      selectedId: '',
    });
  });

  test('addMessage', () => {
    const previousState = {
      chats: { '1': { name: 'test', messages: [] } },
      selectedId: '1',
    };
    expect(
      reducer(
        previousState,
        addMessage({ text: 'test', author: 'author', id: '1' })
      )
    ).toEqual({
      chats: {
        '1': {
          name: 'test',
          messages: [{ text: 'test', author: 'author', id: '1' }],
        },
      },
      selectedId: '1',
    });
  });
});
