import { useState } from "react";
import { usePeepsStore } from "../stores/usePeepsStore";

function SuperPersonAdd() {
  const [name, setName] = useState("");
  const [superpower, setSuperpower] = useState("");

  const { addPeep } = usePeepsStore();

  const handleSaveClick = () => {
    let new_peep = { name, superpower };
    addPeep(new_peep);
    setName("");
    setSuperpower("");
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Add New Super Person
      </h3>
      <div className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            placeholder="Enter name"
          />
        </div>
        <div>
          <label
            htmlFor="superpower"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Superpower
          </label>
          <input
            type="text"
            name="superpower"
            id="superpower"
            value={superpower}
            onChange={(e) => {
              setSuperpower(e.target.value);
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            placeholder="Enter superpower"
          />
        </div>
        <button
          onClick={handleSaveClick}
          className="w-full bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition duration-300 shadow-md hover:shadow-lg"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default SuperPersonAdd;
