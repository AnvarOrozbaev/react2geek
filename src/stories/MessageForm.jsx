import './MessageForm.scss';

export const MessageForm = ({ primary }) => {
  const mode = primary ? '--primary' : '--secondary';
  return (
    <form className="message-form">
      <input
        className="message-form__input"
        type="text"
        placeholder="сообщение"
      />
      <input className={['message-form__btn', mode].join('')} type="submit" />
    </form>
  );
};
