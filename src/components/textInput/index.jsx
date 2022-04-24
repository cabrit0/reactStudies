import './styles.css';

export const TextInput = ({ searchValue, handleChange }) => {
  return (
    <div className="input-container">
      <input
        type="search"
        placeholder='Search posts'
        className='text-input'
        value={searchValue}
        onChange={handleChange}
      ></input>
    </div>
  );
};
