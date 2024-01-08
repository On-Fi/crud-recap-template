import Link from "next/link";

export default function Homepage() {
  return (
    <>
      <h1>Recipes</h1>
      <p>
        <Link href="/new">New Recipe</Link>
      </p>
      <section>
        <h2>All Recipes</h2>
        <RecipePreview recipes={recipes} />
        <p>This is a list of the current recipes.</p>
      </section>
    </>
  );
}
