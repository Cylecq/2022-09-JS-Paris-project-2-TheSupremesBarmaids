import { useContext } from "react";
import { PostContext, ToggleContext } from "../../services/Context";
import fetchSearchApi from "../../utils/fetchSearchApi";
import fetchResetApi from "../../utils/fetchResetApi";

function SearchBar() {
  const { setPosts, setLoading, setWrongFetch } = useContext(PostContext);
  const {
    setIsActionBlockOpened,
    searchTerm,
    setSearchTerm,
    setFilterSelected,
  } = useContext(ToggleContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    if (searchTerm.length === 0) {
      fetchResetApi()
        .then((resPosts) => {
          setPosts(resPosts);
          setLoading(false);
          setWrongFetch(false);
        })
        .catch(() => {
          setLoading(false);
          setWrongFetch(true);
        });
    } else {
      fetchSearchApi(searchTerm).then((resPosts) => {
        if (resPosts !== null) {
          setPosts(resPosts);
          setLoading(false);
          setWrongFetch(false);
        } else {
          setLoading(false);
          setWrongFetch(true);
        }
      });
    }
    setIsActionBlockOpened(false);
    setFilterSelected("");
  };

  return (
    <form className="search-box" role="search">
      <label htmlFor="search" className="srOnly">
        Search Cocktails
      </label>
      <input
        className="search-input"
        type="search"
        placeholder="Search Cocktails"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="search-button" type="submit" onClick={handleSubmit}>
        <img src="/icones/searchColorLeather.svg" alt="searchIcon" />
      </button>
    </form>
  );
}
export default SearchBar;
