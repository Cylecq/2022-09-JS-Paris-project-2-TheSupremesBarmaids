import { useContext } from "react";
import { PostContext, ToggleContext } from "../../services/Context";
import fetchFilterCategoryApi from "../../utils/fetchFilterCategoryApi";

function FilterCategory({ setIsCategoryOpened }) {
  const { setPosts, setLoading, setWrongFetch } = useContext(PostContext);
  const { setIsActionblockOpened } = useContext(ToggleContext);

  // CATEGORY FILTERS
  const categoryFilters = [
    "Cocktail",
    "Shot",
    "Coffee_/_Tea",
    "Punch_/_Party Drink",
    "Beer",
    "Soft_Drink",
  ]; // Every filters c=

  const handleClick = (e) => {
    setLoading(true);
    fetchFilterCategoryApi(e)
      .then((resPosts) => {
        setPosts(resPosts);
        setLoading(false);
        setWrongFetch(false);
      })
      .catch(() => {
        setLoading(false);
        setWrongFetch(true);
      });
    setIsCategoryOpened(false);
    setIsActionblockOpened(false);
  };

  return (
    <ul className="filter-list">
      {categoryFilters.map((ele) => (
        // Create a div for every alcoholic filters
        <li key={ele}>
          <a
            href={`#${ele}`}
            className="button"
            onClick={() => handleClick(ele)}
          >
            {ele.replace("_/_", " / ").replace("_", " ")}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default FilterCategory;