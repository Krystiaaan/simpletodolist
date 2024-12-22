import { useState } from "react";

export default function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<{ id: number; text: string }[]>([]);

  const handleAddTodo = () => {
    setTodos([
      ...todos,
      { id: Date.now(), text: todo }, 
    ]);
    setTodo("");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen space-y-4">
        <h1 className="font-bold text-3xl">Todo List</h1>
        <br />
        <p>What you have todo</p>
        <input
          className="bg-gray-500"
          placeholder="Your task"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
        />
        <button
          className="bg-gray-300 text-black rounded-xl p-2 hover:bg-gray-400"
          onClick={handleAddTodo}
        >
          Submit
        </button>
        <ul>
        {todos.map(({ id, text }) => (
            <li key={id} className="flex justify-between p-2">
              {text}
              <span
                onClick={() => setTodos((prev) => prev.filter((todo) => todo.id !== id))}
                className="cursor-pointer text-red-500 ml-2"
              >
                x
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
