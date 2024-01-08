import Link from "next/link";
import RecipePreview from "@/components/RecipePreview/RecipePreview";

export default function HomePage({ recipes }) {
  return (
    <>
      <h1>Recipes</h1>
      <p>
        <Link href="/new">New Recipe</Link>
      </p>
      <section>
        <h2>All Recipes</h2>
        <RecipePreview recipes={recipes.title} />
        <p>This is a list of the current recipes.</p>
      </section>
    </>
  );
}
