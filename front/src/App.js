import "./App.css";
import React from "react";

function App() {
  // Conexion a la API
  const apiUrl = "https://s7validationcors.vercel.app/book";
  const [books, setBooks] = React.useState([]);

  React.useEffect(() => {
    fetch(apiUrl)
      .then((books) => books.json())
      .then((booksParsed) => setBooks(booksParsed.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <h2>Libros:</h2>
      <ul>
        {books?.map((book) => (
          <li key={book.title}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
