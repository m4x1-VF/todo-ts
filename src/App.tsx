import { useState } from "react";
import Todos from "./components/Todos";
import { type TodoId, type Todo as TodoType } from "./types";

const mockTodos = [
  {
    id: "1",
    title: "Ver video de Youtube de crear la app",
    completed: false,
  },
  {
    id: "2",
    title: "Aprender React con typeScript",
    completed: true,
  },
  {
    id: "3",
    title: "Sacar entrada David Guetta",
    completed: false,
  },
];

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos);
  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id != id);
    setTodos(newTodos);
  };

  const handleCompleted = ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  return (
    <section className="todoapp">
      <Todos
        todos={todos}
        onRemoveTodo={handleRemove}
        onToggleCompleteTodo={handleCompleted}
      />
    </section>
  );
};

export default App;
