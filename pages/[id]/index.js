import connect from "@/db/connect.js";
import Service from "@/db/models/Recipe.js";

export default async function handler(request, response) {
  await connect();
  if (request.method === "GET") {
    const service = await Service.findById(request.query.id);
    if (!service) {
      response.status(404).json({ message: "Recipe not found" });
      return;
    }
    response.status(200).json(recipe);
    return;
  }