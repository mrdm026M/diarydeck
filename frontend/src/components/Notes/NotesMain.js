import React, { useEffect, useState } from "react";
import NotesAccordian from "../StyledComponents/NotesAccordian";
import axios from "axios";

const NotesMain = () => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const { data } = await axios.get("/api/v1/notes");
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <main className="px-6 py-2 mx-auto max-w-7xl">
      <section className="flex items-center justify-between my-4">
        <h1 className="text-2xl font-medium tracking md:text-4xl font-montserrat">
          My Notes
        </h1>
        <a href="/createnote">
          <button
            type="button"
            className="px-5 py-3 text-sm font-medium tracking-wide transition duration-300 border-none rounded-lg font-montserrat text-lightBg bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600"
          >
            Create new Note
          </button>
        </a>
      </section>
      <section className="flex flex-wrap items-start justify-between gap-8 mt-12 md:mt-16">
        {notes.map((note) => (
          <NotesAccordian key={note._id} note={note} />
        ))}
      </section>
    </main>
  );
};

export default NotesMain;
