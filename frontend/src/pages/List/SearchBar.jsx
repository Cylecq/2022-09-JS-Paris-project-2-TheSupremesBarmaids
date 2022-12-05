import { useContext, useRef } from "react";
import { PostContext, ToggleContext } from "../../services/Context";
import fetchSearchApi from "../../utils/fetchSearchApi";
import fetchResetApi from "../../utils/fetchResetApi";

function SearchBar() {
  const { setPosts, setLoading, setWrongFetch } = useContext(PostContext);
  const { setIsActionBlockOpened, setSearchTerm, setFilterSelected } =
    useContext(ToggleContext);
  const input = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(input.current.value);
    setLoading(true);
    if (input.current.value.length === 0) {
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
      fetchSearchApi(input.current.value).then((resPosts) => {
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
        ref={input}
      />
      <button className="search-button" type="submit" onClick={handleSubmit}>
        <img src="/icones/searchColorLeather.svg" alt="searchIcon" />
      </button>
    </form>
  );
}
export default SearchBar;
