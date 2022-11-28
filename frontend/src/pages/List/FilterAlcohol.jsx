import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PostContext, ToggleContext } from "../../services/Context";
import fetchFilterAlcoholicApi from "../../utils/fetchFilterAlcoholicApi";

function FilterAlcohol({ setIsAlcoholicOpened }) {
  const { setPosts, setLoading, setWrongFetch } = useContext(PostContext);
  const { setIsActionBlockOpened, setFilterSelected, setSearchTerm } =
    useContext(ToggleContext);

  const ALCOHOLIC_FILTERS = ["Alcoholic", "Non_alcoholic", "Optional_alcohol"];

  const handleClick = (alcoholic) => {
    setLoading(true);
    fetchFilterAlcoholicApi(alcoholic)
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
    setIsAlcoholicOpened(false);
    setIsActionBlockOpened(false);
    setFilterSelected(alcoholic.replace("_", " "));
    setSearchTerm("");
  };

  return (
    <ul className="filter-list">
      {ALCOHOLIC_FILTERS.map((filter) => (
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
            {filter.replace("_", " ")}
          </Link>
        </motion.li>
      ))}
    </ul>
  );
}

export default FilterAlcohol;
