import React, { FC, useState, useReducer, Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkboxToggled, changeName } from './profileSlice';
import type { RootState } from '@/store/store';
import { ProfileForm } from 'components/profile-form/ProfileForm';
import './Profile.scss';
interface ProfileAction {
  type: string;
  payload: string;
}
interface InitialState {
  alias1: string;
  alias2: string;
}
const initialState: InitialState = {
  alias1: '',
  alias2: '',
};
export const profileFormContext = React.createContext<{
  state: InitialState;
  dispatch: Dispatch<ProfileAction>;
}>({
  state: initialState,
  dispatch: () => null,
});
export const Profile: FC = () => {
  const [value, setValue] = useState('');
  const storeDispatch = useDispatch();
  const isChecked = useSelector((state: RootState) => state.profile.isChecked);
  const userName = useSelector((state: RootState) => state.profile.name);
  const toggle = () => {
    storeDispatch(checkboxToggled());
  };
  const changeUserName = () => {
    storeDispatch(changeName(value));
    setValue('');
  };
  const aliasReducer = (state: InitialState, action: ProfileAction) => {
    switch (action.type) {
      case 'setAlias1': {
        return {
          ...state,
          alias1: action.payload,
        };
      }
      case 'setAlias2': {
        return {
          ...state,
          alias2: action.payload,
        };
      }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(aliasReducer, initialState);

  return (
    <div className="profile-container">
      <h2>Profile </h2>
      <div className="profile-checkbox-wrapper">
        <input
          type="checkbox"
          className="profile-checkbox"
          checked={isChecked}
          onChange={toggle}
        />
        <button
          onClick={toggle}
          className="profile-checkbox-btn"
        >
          change
        </button>
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button onClick={changeUserName}>change name</button>
      </div>
      <h2>{userName} </h2>
      <profileFormContext.Provider value={{ state, dispatch }}>
        <ProfileForm />
      </profileFormContext.Provider>
    </div>
  );
};
