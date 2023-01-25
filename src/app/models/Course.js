const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator");

mongoose.plugin(slug);

const Course = new Schema(
  {
    name: { type: String, minLength: 1, maxLength: 255, required: true },
    description: { type: String, maxLength: 600 },
    image: { type: String },
    level: { type: String, maxLength: 255 },
    slug: { type: String, slug: "name", unique: true },
    videoId: { type: String, maxLength: 255 },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", Course);
