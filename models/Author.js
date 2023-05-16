const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const validCountries = ["COLOMBIA", "ENGLAND", "RUSSIA", "UNITED STATES", "ARGENTINA", "CZECHOSLOVAKIA", "JAPAN", "NIGERIA"];

// Creacion del esquema del autor
const authorSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minLength: [3, "No se ha alcanzado el minimo de caracteres"],
    maxLength: [50, "Se ha superado el maximo de caracteres"]
  },
  country: {
    type: String,
    required: false,
    trim: true,
    uppercase: true,
    enum: validCountries,
  },
  books: {
    type: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
    },
  },
});

// Creacion del modelo en si con un nombre y la configuracion del esquema
const Author = mongoose.model("Author", authorSchema);

module.exports = { Author };
