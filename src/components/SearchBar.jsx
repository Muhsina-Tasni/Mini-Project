
const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="text-center my-4">
      <input
        type="text"
        placeholder="Search food..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="p-2 w-1/2 border-2 border-blue-800 focus:outline-none focus:ring rounded-2xl my-15"
      />
    </div>
  );
};

export default SearchBar;
