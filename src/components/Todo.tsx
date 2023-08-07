import { type TodoId, type Todo as TodoType } from "../types";

interface Props extends TodoType {
  onRemoveTodo: ({ id }: TodoId) => void;
  onToggleCompleteTodo: ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">) => void;
}

const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  onRemoveTodo,
  onToggleCompleteTodo,
}) => {
  const handleChangeCheckbox = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    onToggleCompleteTodo({ id, completed: event.target.checked });
  };
  return (
    <section className="view">
      <input
        className="toggle"
        checked={completed}
        type="checkbox"
        onChange={handleChangeCheckbox}
      />
      <label>{title}</label>
      <button
        className="destroy"
        onClick={() => {
          onRemoveTodo({ id });
        }}
      />
    </section>
  );
};

export default Todo;
