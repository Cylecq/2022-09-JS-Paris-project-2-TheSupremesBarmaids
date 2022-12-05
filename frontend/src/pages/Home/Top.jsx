import Carousel from "../../components/Carousel";
import Card from "../../components/Card";
import topCocktails from "../../utils/topCocktailArray";

function Top() {
  return (
    <div className="top">
      <h2 className="linedTitle">
        <span className="linedTitle__text">Notre top 5</span>
      </h2>
      <Carousel>
        {topCocktails.map((ele) => (
          <Card
            key={ele.idDrink}
            id={ele.idDrink}
            imgSrc={ele.strDrinkThumb}
            imgAlt={ele.strDrink}
            name={ele.strAlcoholic}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default Top;
