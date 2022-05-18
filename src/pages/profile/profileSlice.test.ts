import { Action } from 'redux';
import reducer, {
  checkboxToggled,
  changeName,
  checkboxSetTrue,
} from './profileSlice';

describe('profileReducer', () => {
  const emptyActions: Action = {
    type: '',
  };
  test('should return the initial state', () => {
    expect(reducer(undefined, emptyActions)).toEqual({
      isChecked: false,
      name: '',
      auth: false,
    });
  });
  test('change name at state', () => {
    const previousState = {
      isChecked: false,
      name: '',
      auth: false,
    };
    expect(reducer(previousState, changeName('test'))).toEqual({
      isChecked: false,
      name: 'test',
      auth: false,
    });
  });
  test('change isChecked at state', () => {
    const previousState = {
      isChecked: false,
      name: '',
      auth: false
    };
    expect(reducer(previousState, checkboxToggled())).toEqual({
      isChecked: true,
      name: '',
      auth: false
    });
  });
  test('isChecked set true', () => {
    const previousState = {
      isChecked: false,
      name: '',
      auth: false
    };
    expect(reducer(previousState, checkboxSetTrue())).toEqual({
      isChecked: true,
      name: '',
      auth: false
    });
  });
  test('isChecked do not set false when invoke checkboxSetTrue ', () => {
    const previousState = {
      isChecked: true,
      name: '',
      auth: false
    };
    expect(reducer(previousState, checkboxSetTrue())).toEqual({
      isChecked: true,
      name: '',
      auth: false
    });
  });
});
