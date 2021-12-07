import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { deleteNoteAction, updateNoteAction } from "../../actions/noteAction";

const UpdateNote = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [category, setCategory] = useState();
  const [date, setDate] = useState("");

  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteNoteAction(id));
    }
    navigate("/notes");
  };

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get(`/api/v1/notes/${params.id}`);

      setTitle(data.title);
      setContent(data.content);
      setCategory(data.category);
      setDate(data.updatedAt);
    };

    fetch();
  }, [params.id, date]);

  const resetHandler = () => {
    setTitle("");
    setCategory("");
    setContent("");
  };

  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(updateNoteAction(params.id, title, content, category));

    if (!title || !content || !category) return;

    resetHandler();
    navigate("/notes");
  };

  return (
    <main className="px-6 py-2 mx-auto max-w-7xl">
      <section className="my-4">
        <h1 className="text-2xl font-medium tracking md:text-4xl font-montserrat">
          Edit Note
        </h1>
      </section>
      <section className="mt-8 space-y-10">
        <form className="px-8 pt-6 pb-8 bg-white" onSubmit={updateHandler}>
          <div className="mb-4">
            <label className="block mb-2 text-lg font-bold tracking-wide text-darkBg font-robot">
              Title
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              placeholder="Enter Title"
              defaultValue={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-base font-bold tracking-wide text-darkBg font-montserrat">
              Content
            </label>
            <textarea
              placeholder="Enter Content"
              className="w-full h-32 px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline textarea textarea-bordered"
              defaultValue={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-base font-bold tracking-wide text-darkBg font-montserrat">
              Category
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              placeholder="Enter Category"
              defaultValue={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center gap-4">
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            >
              Update Note
            </button>
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              onClick={() => deleteHandler(params.id)}
            >
              Delete Note
            </button>
          </div>
        </form>

        <p>Updated On - {date.substring(0, 10)}</p>
      </section>
    </main>
  );
};

export default UpdateNote;
