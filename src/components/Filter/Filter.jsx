import { useDispatch } from 'react-redux';
import { setFilterValue } from 'redux/filterSlice';
export const Filter = () => {
  const dispatch = useDispatch();
  const handleSetFilterValue = ({ target: { value } }) => {
    console.log({ target: { value } });
    dispatch(setFilterValue(value));
  };
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" onChange={handleSetFilterValue}></input>
    </>
  );
};
