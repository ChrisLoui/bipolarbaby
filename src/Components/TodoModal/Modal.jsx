import React, { useState, useEffect, useRef } from "react";
import { addTodo, fetchTodos } from "../../backend/todoService";
import { useModal } from "../ModalContent";
import EmojiPicker from 'emoji-picker-react';

const EMOJIS = [
  "🌟",
  "🎯",
  "🎨",
  "🎭",
  "🎪",
  "🎫",
  "🎪",
  "🎭",
  "🎨",
  "🎯",
  "🌟",
  "🎪",
  "🎭",
  "🎨",
];
const Modal = () => {
  const [newTask, setNewTask] = useState("");
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);
  const { isModalOpen, setIsModalOpen } = useModal();
  const [error, setError] = useState(null);
  const [showPicker, setShowPicker] = useState(false);

  // Focus input when modal opens with a slight delay
  useEffect(() => {
    if (isModalOpen) {
      // Add a small delay to ensure the modal is fully rendered
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isModalOpen]);

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
  return (
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
            <div className="w-10 h-10 border-2 border-black rounded-md flex justify-center items-center" onClick={() => {
                setShowPicker(!showPicker);
            }}> 
            <div className="w-full h-full">
            {showPicker && <EmojiPicker/>}
            </div>
            </div>
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
  );
};

export default Modal;
