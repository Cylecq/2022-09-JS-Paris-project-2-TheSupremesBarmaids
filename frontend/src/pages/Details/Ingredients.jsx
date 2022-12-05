function Ingredients({ ingredients }) {
  return (
    <ul className="recipe__list">
      {ingredients
        .filter((ingredient) => ingredient !== null)
        .map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
    </ul>
  );
}

export default Ingredients;
