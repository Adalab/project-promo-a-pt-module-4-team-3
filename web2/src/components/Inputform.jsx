function Inputform(props) {
  return (
    <input
      className="addForm__input"
      type={props.type}
      name={props.name}
      id={props.id}
      placeholder={props.placeholder}
      onInput={props.onInput}
      value={props.value}
    />
  );
}

export default Inputform;
