import Card from "../Card/Card";

export default function RecipePreview({ recipes }) {
    return (
      <>
          {recipes.map((recipe) => (
            <Card
              key={recipe.title}
              imgSource={recipe.image}
              description={recipe.ingredients}
              neededItems={recipe.instructions}
              id={recipe._id}
            />
          ))}
      </>
    );
  }