import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PostContext, ToggleContext } from "../../services/Context";
import fetchFilterCategoryApi from "../../utils/fetchFilterCategoryApi";

function FilterCategory({ setIsCategoryOpened }) {
  const { setPosts, setLoading, setWrongFetch } = useContext(PostContext);
  const { setIsActionBlockOpened, setFilterSelected, setSearchTerm } =
    useContext(ToggleContext);

  const CATEGORY_FILTERS = [
    "Cocktail",
    "Shot",
    "Coffee_/_Tea",
    "Punch_/_Party Drink",
    "Beer",
    "Soft_Drink",
  ];

  const handleClick = (category) => {
    setLoading(true);
    fetchFilterCategoryApi(category)
      .then((resPosts) => {
        setPosts(resPosts);
        setWrongFetch(false);
      })
      .catch(() => {
        setWrongFetch(true);
      })
      .finally(() => {
        setLoading(false);
      });
    setIsCategoryOpened(false);
    setIsActionBlockOpened(false);
    setFilterSelected(category.replace("_/_", " / ").replace("_", " "));
    setSearchTerm("");
  };

  return (
    <ul className="filter-list">
      {CATEGORY_FILTERS.map((filter) => (
        <motion.li
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "initial", opacity: "100%" }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.5 }}
          key={filter}
        >
          <Link
            to="/list"
            className="button"
            onClick={() => handleClick(filter)}
          >
            {filter.replace("_/_", " / ").replace("_", " ")}
          </Link>
        </motion.li>
      ))}
    </ul>
  );
}

export default FilterCategory;
