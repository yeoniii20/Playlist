const Search = () => {
  return (
    <div className="flex items-center justify-center mt-4">
      <input
        type="text"
        placeholder="Search..."
        className="w-full max-w-md px-4 py-2 rounded-lg border border-black-3 text-black-7 placeholder-black-4 bg-black-0 focus:outline-none focus:ring-2 focus:ring-pink-3 focus:border-pink-4"
      />
    </div>
  );
};

export default Search;
