import { useId } from "react";

const SearchBox = ({ value, onFilter }) => {
  const filterId = useId();
  return (
    <div>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input
        type="text"
        value={value}
        id={filterId}
        onChange={(event) => onFilter(event.target.value)}
      />
    </div>
  );
};
export default SearchBox;
