import { Action } from 'redux';
import reducer, { checkboxToggled, changeName } from './profileSlice';

describe('profileReducer', () => {
  const emptyActions: Action = {
    type: '',
  };
  test('should return the initial state', () => {
    expect(reducer(undefined, emptyActions)).toEqual({
      isChecked: false,
      name: '',
    });
  });
  test('change name at state', () => {
    const previousState = {
      isChecked: false,
      name: '',
    };
    expect(reducer(previousState, changeName('test'))).toEqual({
      isChecked: false,
      name: 'test',
    });
  });
  test('change isChecked at state', () => {
    const previousState = {
      isChecked: false,
      name: '',
    };
    expect(reducer(previousState, checkboxToggled())).toEqual({
      isChecked: true,
      name: '',
    });
  });
});
