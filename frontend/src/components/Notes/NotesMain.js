import React, { useEffect } from "react";
import NotesAccordian from "../StyledComponents/NotesAccordian";
import CreateNoteModal from "../StyledComponents/CreateNoteModal";
import { useDispatch, useSelector } from "react-redux";
import { listNotes } from "../../actions/noteAction";
import { useNavigate } from "react-router-dom";

const NotesMain = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const noteList = useSelector((state) => state.noteList);
  const { loading, error, notes } = noteList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const noteCreate = useSelector((state) => state.noteCreate);
  const { success: successCreate } = noteCreate;

  const noteUpdate = useSelector((state) => state.noteUpdate);
  const { success: successUpdate } = noteUpdate;

  const noteDelete = useSelector((state) => state.noteDelete);
  const { success: successDelete } = noteDelete;

  useEffect(() => {
    if (error) {
      alert(error);
    }

    if (!userInfo) {
      navigate("/");
    }

    dispatch(listNotes());
  }, [
    dispatch,
    error,
    successCreate,
    navigate,
    userInfo,
    successUpdate,
    successDelete,
  ]);

  return (
    <main className="px-6 py-2 mx-auto max-w-7xl">
      <section className="flex items-center justify-between my-4">
        <h1 className="text-2xl font-medium tracking md:text-4xl font-montserrat">
          My Notes
        </h1>
        <CreateNoteModal />
      </section>
      <section className="flex flex-wrap items-start justify-between gap-8 mt-12 md:mt-16">
        {loading ? (
          <h1>Loading</h1>
        ) : (
          notes
            ?.reverse()
            .map((note) => <NotesAccordian key={note._id} note={note} />)
        )}
      </section>
    </main>
  );
};

export default NotesMain;
