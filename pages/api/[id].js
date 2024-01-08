import connect from "@/db/connect";
import Recipe from "@/db/models/Recipe";

export default async function handler(request, response) {
  await connect();
  const { query } = request;
  const id = query.id;

  if (request.method === "GET") {
    const recipe = await Recipe.findById(id);

    if (!recipe) {
      response.status(404).json({ status: "not found" });
    }
    response.status(200).json(recipe);
  }
}
