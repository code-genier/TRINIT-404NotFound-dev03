import mongoose from "mongoose";

const PlantSchema = new mongoose.Schema(
  {
    plantName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
  },
  { timestamps: true }
);

const Plant = mongoose.model("Plant", PlantSchema);
export default Plant;
