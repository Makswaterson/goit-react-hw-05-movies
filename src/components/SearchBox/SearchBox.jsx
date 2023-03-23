const SearchBox = ({ value, onChange }) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Please enter movies name"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBox;
