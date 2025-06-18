// searchbar
const SearchBar = ({ searchTerm, onSearchChange ,onClearSearch}) => {
  return (
    <div className="">
    <div className="text-center my-4 ">
      <input
      name="saerched"
        type="text"
        placeholder="Search food..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="p-2 w-1/2 border-2 border-blue-800 focus:outline-none focus:ring rounded-2xl my-15"
      />
      {/* button to clear the input field */}
      <button
          onClick={onClearSearch}
          className="ml-3 px-4 py-1 bg-blue-800 text-white rounded-3xl hover:bg-red-500"
        >
        <span>X</span>
        </button>

    </div>
    </div>
  );
};

export default SearchBar;
