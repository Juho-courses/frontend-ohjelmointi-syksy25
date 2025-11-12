function SuperPerson({ name, superpower }) {
  return (
    <li className="bg-linear-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-4 hover:shadow-md transition duration-300">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-gray-800">{name}</span>
        <span className="text-blue-600 italic">✨ {superpower}</span>
      </div>
    </li>
  );
}

export default SuperPerson;
