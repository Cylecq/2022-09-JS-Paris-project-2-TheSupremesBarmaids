import { useContext, useState } from "react";
import { ToggleContext } from "../../services/Context";
import DropdownFilterAlcohol from "./DropdownFilterAlcohol";
import DropdownFilterCategory from "./DropdownFilterCategory";
import DropdownFilterIngredient from "./DropdownFilterIngredient";
import ResetButton from "./ResetButton";

function Filter() {
  const { isActionBlockOpened } = useContext(ToggleContext);
  const [isAlcoholicOpened, setIsAlcoholicOpened] = useState(false);
  const [isCategoryOpened, setIsCategoryOpened] = useState(false);
  const [isIngredientsOpened, setIsIngredientsOpened] = useState(false);

  return (
    <div
      className={
        isActionBlockOpened ? "filterBlockOpened filter-btn" : "filter-btn"
      }
    >
      <DropdownFilterAlcohol
        isAlcoholicOpened={isAlcoholicOpened}
        setIsAlcoholicOpened={setIsAlcoholicOpened}
        setIsCategoryOpened={setIsCategoryOpened}
        setIsIngredientsOpened={setIsIngredientsOpened}
      />

      <DropdownFilterCategory
        isCategoryOpened={isCategoryOpened}
        setIsCategoryOpened={setIsCategoryOpened}
        setIsAlcoholicOpened={setIsAlcoholicOpened}
        setIsIngredientsOpened={setIsIngredientsOpened}
      />

      <DropdownFilterIngredient
        isIngredientsOpened={isIngredientsOpened}
        setIsIngredientsOpened={setIsIngredientsOpened}
        setIsAlcoholicOpened={setIsAlcoholicOpened}
        setIsCategoryOpened={setIsCategoryOpened}
      />

      <ResetButton
        setIsIngredientsOpened={setIsIngredientsOpened}
        setIsAlcoholicOpened={setIsAlcoholicOpened}
        setIsCategoryOpened={setIsCategoryOpened}
      />
    </div>
  );
}

export default Filter;
