import React from "react";

function TodoItem({
  title,
  description,
  isCompleted,
  updateHandler,
  deleteHandler,
  id,
}) {
  return (
    <div className="border border-gray-300 rounded p-4 mb-4 bg-amber-400 shadow-xl hover:scale-105 transition duration-300">
      <div>
        <h4 className="text-xl font-semibold">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="mt-2 flex items-center">
        <input
          onChange={() => {
            updateHandler(id);
          }}
          type="checkbox"
          checked={isCompleted}
          className="form-checkbox h-5 w-5 text-blue-500"
        />
        <button
          onClick={() => {
            deleteHandler(id);
          }}
          className="ml-2 px-4 py-2 bg-purple-600 text-white rounded-lg shadow focus:outline-none hover:bg-purple-800"
        >
          Delete Task
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
