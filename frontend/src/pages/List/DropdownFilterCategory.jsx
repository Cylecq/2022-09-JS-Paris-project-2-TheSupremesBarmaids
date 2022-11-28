import FilterCategory from "./FilterCategory";

function DropdownFilterCategory({
  isCategoryOpened,
  setIsCategoryOpened,
  setIsAlcoholicOpened,
  setIsIngredientsOpened,
}) {
  const handleOpenCategory = () => {
    setIsCategoryOpened(!isCategoryOpened);
    setIsAlcoholicOpened(false);
    setIsIngredientsOpened(false);
  };

  return (
    <div className="dropdown-filter">
      <button type="button" onClick={handleOpenCategory}>
        Categories
      </button>
      {isCategoryOpened && (
        <FilterCategory setIsCategoryOpened={setIsCategoryOpened} />
      )}
    </div>
  );
}

export default DropdownFilterCategory;
