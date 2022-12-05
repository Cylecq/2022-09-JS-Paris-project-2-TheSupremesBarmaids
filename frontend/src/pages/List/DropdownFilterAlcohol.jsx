import FilterAlcohol from "./FilterAlcohol";

function DropdownFilterAlcohol({
  isAlcoholicOpened,
  setIsAlcoholicOpened,
  setIsCategoryOpened,
  setIsIngredientsOpened,
}) {
  const handleOpenAlcoholic = () => {
    setIsAlcoholicOpened(!isAlcoholicOpened);
    setIsCategoryOpened(false);
    setIsIngredientsOpened(false);
  };

  return (
    <div className="dropdown-filter">
      <button type="button" onClick={handleOpenAlcoholic}>
        Alcoholic
      </button>
      {isAlcoholicOpened && (
        <FilterAlcohol setIsAlcoholicOpened={setIsAlcoholicOpened} />
      )}
    </div>
  );
}

export default DropdownFilterAlcohol;
