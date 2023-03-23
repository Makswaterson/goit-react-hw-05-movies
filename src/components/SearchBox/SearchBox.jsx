import { useState } from 'react';

const SearchBox = ({ value, onSubmit, onChange }) => {
  const [searchInput, setSearchInput] = useState('');

  const onFormSubmit = e => {
    e.preventDefault();
    onSubmit(searchInput);
    setSearchInput('');
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Please enter movies name"
        value={searchInput}
        name="name"
        onChange={e => setSearchInput(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBox;

// const SearchBox = ({ value, onChange }) => {
//   return (
//     <form>
//       <input
//         type="text"
//         placeholder="Please enter movies name"
//         value={value}
//         onChange={e => onChange(e.target.value)}
//       />
//       <button type="submit">Search</button>
//     </form>
//   );
// };

// export default SearchBox;
