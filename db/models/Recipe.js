import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const schema = new Schema(
  {
    title: { type: String, uppercase: true, required: true },
    ingredients: { type: Array, required: true },
    instructions: { type: Array, required: true },
  },
  { timestamps: true }
);

const Recipe = models?.Recipe || model("Recipe", schema);
export default Recipe;
