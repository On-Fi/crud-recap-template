import connect from "@/db/connect.js";
import Recipe from "@/db/models/Recipe.js";

export default async function handler(request, response) {
    await connect();
  
    switch (request.method) {
      case "GET":
        try {
          const Recipes = await Recipe.find();
          if (Recipes.length === 0 || !Recipes) {
            throw new Error("No Recipe found.");
          }
          return response.status(200).json(Recipes);
        } catch (error) {
          return response.status(404).json({ message: error.message });
        }
  
      case "POST":
        try {
          const flake = request.body;
          const flakeResponse = await Flake.create(flake);
          if (!flakeResponse) {
            throw new Error("Could not create new Flake.");
          }
          return response.status(200).json({
            message: `The Flake ${flakeResponse.name} was successfully created with the id ${flakeResponse._id}`,
          });
        } catch (error) {
          return response.status(404).json({ message: error.message });
        }
  
      default:
        return response
          .status(403)
          .json({ message: "Method not allowed on that route." });
    }
  }