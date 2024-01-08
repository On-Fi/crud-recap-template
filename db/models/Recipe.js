import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const recipeSchema = new Schema(
  {
    title: { type: String, uppercase: true, required: true },
    image: { type: String },
    description: { type: String, required: true },
    neededItems: { type: String, required: true },
  },
  { timestamps: true }
);

const Recipe = models?.Recipe || model("Recipe", schema);
export default Recipe;
