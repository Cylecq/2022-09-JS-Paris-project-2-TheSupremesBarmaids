import Carousel from "../../components/Carousel";
import Card from "../../components/Card";

function Top() {
  const topCocktails = [
    {
      strDrinkThumb: "/top-cocktails/cosmopolitan.jpg",
      strAlcoholic: "Cosmopolitan",
      idDrink: "17196",
    },
    {
      strDrinkThumb: "/top-cocktails/daiquiri.jpg",
      strAlcoholic: "Daiquiri",
      idDrink: "11006",
    },
    {
      strDrinkThumb: "/top-cocktails/espresso-martini.jpg",
      strAlcoholic: "Espresso Martini",
      idDrink: "17212",
    },
    {
      strDrinkThumb: "/top-cocktails/gimlet.jpg",
      strAlcoholic: "Gimlet",
      idDrink: "17255",
    },
    {
      strDrinkThumb: "/top-cocktails/margarita.jpg",
      strAlcoholic: "Margarita",
      idDrink: "11007",
    },
    {
      strDrinkThumb: "/top-cocktails/manhattan.jpg",
      strAlcoholic: "Manhattan",
      idDrink: "11008",
    },
    {
      strDrinkThumb: "/top-cocktails/old-fashion.jpg",
      strAlcoholic: "Old Fashioned",
      idDrink: "11001",
    },
  ];
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
