import React, { useState, useEffect, useRef } from "react";
import {
  addTodo,
  fetchTodos,
  toggleTodo,
  deleteTodo,
} from "../../backend/todoService";
import { useModal } from "../ModalContent";

const EMOJIS = ["🌟", "🎯", "🎨", "🎭", "🎪", "🎫", "🎪", "🎭", "🎨", "🎯", "🌟", "🎪", "🎭", "🎨"];

const MovieCheck = () => {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");
  const inputRef = useRef(null);
  const { isModalOpen, setIsModalOpen } = useModal();
  const [error, setError] = useState(null);
  

  // Load to-dos from Supabase on component mount
  useEffect(() => {
    const loadTodos = async () => {
      try {
        const data = await fetchTodos();
        setTodos(data);
        setError(null);
      } catch (err) {
        console.error("Error loading todos:", err);
        setError(err.message);
      }
    };
    loadTodos();
  }, []);

  const handleAddTodo = async () => {
    try {
      if (newTask.trim() === "") return;

      // Generate random emoji
      const randomEmoji = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
      
      // Add the new todo with emoji
      await addTodo(newTask, randomEmoji);
      setNewTask(""); // Clear input

      // Fetch updated todos
      const updatedTodos = await fetchTodos();
      setTodos(updatedTodos);
      setError(null);
    } catch (err) {
      console.error("Error adding todo:", err);
      setError(err.message);
    }
  };

  const handleToggleTodo = async (id, completed) => {
    await toggleTodo(id, completed);
    const updatedTodos = await fetchTodos();
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = async (id) => {
    await deleteTodo(id);
    const updatedTodos = await fetchTodos();
    setTodos(updatedTodos);
  };

  // Focus input when modal opens with a slight delay
  useEffect(() => {
    if (isModalOpen) {
      // Add a small delay to ensure the modal is fully rendered
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isModalOpen]);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const data = await fetchTodos();
        setTodos(data);
      } catch (err) {
        console.error("Error loading todos:", err);
        setError(err.message);
      }
    };

    loadTodos();
  }, []);

  return (
    <div>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
          {error}
        </div>
      )}
      <div className="flex justify-center items-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          To-do ➕
        </button>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-11/12 max-w-md shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-sacramento font-semibold text-gray-800">
                Create a<span className="font-primary"> To-do</span>
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold focus:outline-none"
              >
                ×
              </button>
            </div>
            <div className="flex gap-3">
              <input
                ref={inputRef}
                autoFocus
                type="text"
                placeholder="Add a task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                // Add onFocus handler as backup
                onFocus={(e) => e.target.focus()}
              />
              <button
                onClick={() => {
                  handleAddTodo();
                  setIsModalOpen(false);
                }}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="mt-6 bg-white/80 rounded-lg p-4">
        {" "}
        {/* Add background and padding */}
        <ul className="space-y-3">
          {todos.length === 0 ? (
            <li className="text-gray-500">No tasks yet. Add one!</li>
          ) : (
            [...todos]
              .sort((a, b) => Number(a.completed) - Number(b.completed))
              .map((todo) => (
              <li
                key={todo.id}
                className="flex items-center justify-between p-2 bg-white rounded-lg shadow  border-2 border-gray-900"
              >
                <div className="flex items-center gap-2">
                  <div className="text-2xl">{todo.emoji}</div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`font-bold font-serif ${
                        todo.completed ? "line-through text-green-700" : ""
                      }`}
                    >
                      {todo.task}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleToggleTodo(todo.id, todo.completed)}
                  className={`px-2 py-1 ${
                    todo.completed ? "text-green-500" : "text-gray-400"
                  } hover:text-green-700`}
                >
                  {todo.completed ? "✅" : "⬜"}
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default MovieCheck;
