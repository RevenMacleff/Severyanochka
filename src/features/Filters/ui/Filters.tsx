import { useAppDispatch } from "src/shared/hooks/redux";
import { setCategory } from "src/shared/store/FilterSlice";
const Filters = () => {
  const dispatch = useAppDispatch();

  const handleCategoryChange = (category) => {
    dispatch(setCategory(category));
  };
  return (
    <>
      <button onClick={() => handleCategoryChange("")}>Все</button>
      <button onClick={() => handleCategoryChange("?category=1")}>Категория 1</button>
    </>
  );
};

export default Filters;
