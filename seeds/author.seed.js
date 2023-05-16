const mongoose = require("mongoose");
const { connect } = require("../db.js");
const { Author } = require("../models/Author.js");
// const { faker } = require("@faker-js/faker");

const authorSeed = async () => {
  try {
    // Conexion
    await connect();
    console.log("Conexion desde el seed satisfactoria");

    // Borrado de datos
    await Author.collection.drop();
    console.log("Limpieza de la coleccion Author realizada");

    const authorList = [
      { name: "Gabriel García Márquez", country: "Colombia" },
      { name: "Jane Austen", country: "England" },
      { name: "Leo Tolstoy", country: "Russia" },
      { name: "Virginia Woolf", country: "England" },
      { name: "Ernest Hemingway", country: "United States" },
      { name: "Jorge Luis Borges", country: "Argentina" },
      { name: "Franz Kafka", country: "Czechoslovakia" },
      { name: "Toni Morrison", country: "United States" },
      { name: "Haruki Murakami", country: "Japan" },
      { name: "Chinua Achebe", country: "Nigeria" },
    ];

    // for (let i = 0; i < 5; i++) {
    //   let newAuthor = {};
    //   try {
    //     newAuthor = {
    //       name: faker.lorem.words(2),
    //       country: faker.address.country()
    //     };
    //   } catch (error) {
    //     console.error(error);
    //     console.log(error);
    //   }
    //   authorList.push(newAuthor);
    // }

    // Insercion de books
    const documents = authorList.map((author) => new Author(author));
    await Author.insertMany(documents);
    console.log("Datos insertados correctamente");
  } catch (error) {
    console.error(error);
  } finally {
    mongoose.disconnect();
  }
};

authorSeed();
