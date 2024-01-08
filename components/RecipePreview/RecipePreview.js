import styled from "styled-components";

export default function RecipePreview({ recipes }) {
    return (
      <>
        <StyledMain>
          {recipes.map((recipe) => (
            <Card
              key={recipe.title}
              imgSource={recipe.image}
              title={recipe.title}
              author={recipe.author.name}
              description={recipe.description}
              neededItems={recipe.neededItems}
              id={recipe._id}
            />
          ))}
        </StyledMain>
        <FlexDiv>
          <ActionButton href="/recipes">See all Recipes</ActionButton>
        </FlexDiv>
      </>
    );
  }