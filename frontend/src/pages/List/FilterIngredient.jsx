import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PostContext, ToggleContext } from "../../services/Context";
import fetchFilterIngredientApi from "../../utils/fetchFilterIngredientApi";

function FilterIngredient({ setIsIngredientsOpened }) {
  const { setPosts, setLoading, setWrongFetch } = useContext(PostContext);
  const { setIsActionBlockOpened, setFilterSelected, setSearchTerm } =
    useContext(ToggleContext);

  const INGREDIENT_FILTERS = [
    "Gin",
    "Scotch",
    "Tequila",
    "Vodka",
    "Whiskey",
    "Ricard",
    "Milk",
    "Coffee",
    "Lemon",
    "Yoghurt",
  ];

  const handleClick = (ingredient) => {
    setLoading(true);
    fetchFilterIngredientApi(ingredient)
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
    setIsIngredientsOpened(false);
    setIsActionBlockOpened(false);
    setFilterSelected(ingredient);
    setSearchTerm("");
  };

  return (
    <motion.ul
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "initial", opacity: "100%" }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="filter-list"
    >
      {INGREDIENT_FILTERS.map((filter) => (
        <li key={filter}>
          <Link
            to="/list"
            className="button"
            onClick={() => handleClick(filter)}
          >
            {filter}
          </Link>
        </li>
      ))}
    </motion.ul>
  );
}

export default FilterIngredient;
