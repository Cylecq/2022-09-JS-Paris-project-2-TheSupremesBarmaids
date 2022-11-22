import { useContext } from "react";
import { PostContext, ToggleContext } from "../../services/Context";
import fetchFilterAlcoholicApi from "../../utils/fetchFilterAlcoholicApi";

function FilterAlcohol({ setIsAlcoholicOpened }) {
  const { setPosts, setLoading, setWrongFetch } = useContext(PostContext);
  const { setIsActionblockOpened } = useContext(ToggleContext);

  // ALCOHOLIC FILTERS
  const alcoholicFilters = ["Alcoholic", "Non_alcoholic", "Optional_alcohol"]; // Every filters a=

  const handleClick = (e) => {
    setLoading(true);
    fetchFilterAlcoholicApi(e)
      .then((resPosts) => {
        setPosts(resPosts);
        setLoading(false);
        setWrongFetch(false);
      })
      .catch(() => {
        setLoading(false);
        setWrongFetch(true);
      });
    setIsAlcoholicOpened(false);
    setIsActionblockOpened(false);
  };

  return (
    <ul className="filter-list">
      {alcoholicFilters.map((ele) => (
        // Create a div for every alcoholic filters
        <li key={ele}>
          <a
            href={`#${ele}`}
            className="button"
            onClick={() => handleClick(ele)}
          >
            {ele.replace("_", " ")}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default FilterAlcohol;