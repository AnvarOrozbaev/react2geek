import "./Message.css"

 const Message = (props) =>{

  return (
    <p className="message-text" >
      {props.text}
    </p>
  );
}

export default Message