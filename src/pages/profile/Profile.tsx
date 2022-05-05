import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  checkboxToggled,
  changeName,
  selectIsChecked,
  selectName,
} from './profileSlice';
import './Profile.scss';
export const Profile: FC = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const isChecked = useSelector(selectIsChecked);
  const userName = useSelector(selectName);
  const toggle = () => {
    dispatch(checkboxToggled());
    if (!isChecked) {
      if (userName.length > 0) {
        localStorage.setItem('userName', userName);
      }
    }
    if (isChecked) {
      localStorage.removeItem('userName');
    }
  };
  const changeUserName = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.length > 0) {
      dispatch(changeName(value));
      if (isChecked) {
        localStorage.setItem('userName', value);
      }
      setValue('');
    }
  };
  return (
    <div className="profile-container">
      <h2>Profile </h2>
      <div>
        <form onSubmit={(e) => changeUserName(e)}>
          <input
            className="profile-input"
            type="text"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            placeholder="введите имя"
          />
          <input
            className="profile-btn"
            type="submit"
            value="изменить"
          />
        </form>
      </div>
      <div className="checkbox-wrapper">
        <span>Запомнить</span>
        <input
          type="checkbox"
          data-testid="profile-checkbox"
          className="profile-checkbox"
          checked={isChecked}
          onChange={toggle}
        />
      </div>
      {userName.length > 0 && <h2 data-testid="user-name">{userName}</h2>}
    </div>
  );
};
