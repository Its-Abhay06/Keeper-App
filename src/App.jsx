import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Note from "./Components/Note";
import notes from "./notes";
console.log(notes[0].content);

function App() {
  return (
    <div>
      <Header />
      <Footer />
      {notes.map((noteItems) => (
        <Note
          key={noteItems.key}
          title={noteItems.title}
          content={noteItems.content}
        />
      ))}
    </div>
  );
}

export default App;
