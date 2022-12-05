import FilterIngredient from "./FilterIngredient";

function DropodownFilterIngredient({
  isIngredientsOpened,
  setIsIngredientsOpened,
  setIsAlcoholicOpened,
  setIsCategoryOpened,
}) {
  const handleOpenIngredients = () => {
    setIsIngredientsOpened(!isIngredientsOpened);
    setIsAlcoholicOpened(false);
    setIsCategoryOpened(false);
  };

  return (
    <div className="dropdown-filter">
      <button type="button" onClick={handleOpenIngredients}>
        Ingredients
      </button>
      {isIngredientsOpened && (
        <FilterIngredient setIsIngredientsOpened={setIsIngredientsOpened} />
      )}
    </div>
  );
}

export default DropodownFilterIngredient;
