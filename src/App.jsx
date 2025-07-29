import React, { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Note from "./Components/Note";
import CreateArea from "../../../Downloads/React Learning/319-keeper-app-part-3-starting/src/components/CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNotes) {
    setNotes((prevNotes) => [...prevNotes, newNotes]);
  }
  function deleteNote(id) {
    setNotes(notes.filter((noteItems, index) => index !== id));
  }

  return (
    <div>
      <Header />
      <Footer />
      {notes.map((noteItems, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItems.title}
            content={noteItems.content}
            onDelete={deleteNote}
          />
        );
      })}
      <CreateArea onAdd={addNote} />
    </div>
  );
}

export default App;
