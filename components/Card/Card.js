

export default function Card({
  imgSource,
  title,
  instructions,
  ingredients,
  neededItems,
  id,
}) {
  return (
    <Link href={`/${id}`}>
          <h1>{title}</h1>
          <div>{instructions}</div>
          <div>{ingredients}</div>
    </Link>
  );
}
