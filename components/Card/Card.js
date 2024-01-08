export default function Card({
  title,
  instructions,
  ingredients,
  id,
}) {
  return (
    <>
          <h1>{title}</h1>
          <div>{instructions}</div>
          <div>{ingredients}</div>
    </>
  );
}
