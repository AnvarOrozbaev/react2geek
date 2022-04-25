import React, { FC, useContext } from 'react';
import { profileFormContext } from 'src/pages/profile/Profile';
import './ProfileForm.scss';

export const ProfileForm: FC = () => {
  const { state, dispatch } = useContext(profileFormContext);
  const { alias1, alias2 } = state;
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    dispatch({ type, payload: e.target.value });
  };

  return (
    <form className="profile-form">
      <label htmlFor="first-alias-input">Псевдоним 1</label>
      <input
        id="first-alias-input"
        className="profile-form-input"
        type="text"
        value={alias1}
        onChange={(e) => handleChange(e, 'setAlias1')}
      />
      <p>{alias1}</p>
      <label htmlFor="second-alias-input">Псевдоним 2</label>
      <input
        id="second-alias-input"
        className="profile-form-input"
        type="text"
        value={alias2}
        onChange={(e) => handleChange(e, 'setAlias2')}
      />
      <p>{alias2}</p>
    </form>
  );
};
