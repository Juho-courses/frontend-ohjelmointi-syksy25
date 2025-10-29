function ListItem({ nimi }) {
  return (
    <li
      onClick={() => console.log(nimi)}
      className="cursor-pointer bg-gray-50 hover:bg-indigo-50 border border-gray-200 rounded-xl px-5 py-3 shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-between group"
    >
      <span className="text-gray-700 font-medium group-hover:text-indigo-600">
        {nimi}
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-400 group-hover:text-indigo-500 transition-colors"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </li>
  );
}

export default ListItem;
