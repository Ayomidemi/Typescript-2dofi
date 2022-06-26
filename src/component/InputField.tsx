import React, { useRef } from "react";
import "./styles.css";
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleInput: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleInput }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className="input" onSubmit={(e) => {
        handleInput(e)
        inputRef.current?.blur()
        }}>
      <input
        type="input"
        placeholder="Enter a task"
        ref={inputRef}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="input__box"
      />

      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
