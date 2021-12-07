import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { createNoteAction } from "../../actions/noteAction";
import { useNavigate } from "react-router-dom";

const CreateNoteModal = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();
  // const noteCreate = useSelector((state) => state.noteCreate);
  // const { note } = noteCreate;

  const resetHandler = () => {
    setTitle("");
    setContent("");
    setCategory("");
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!title || !content || !category) return;
    dispatch(createNoteAction(title, content, category));

    resetHandler();
    navigate("/notes");
  };

  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div>
        <button
          type="button"
          onClick={openModal}
          className="px-5 py-3 text-sm font-medium tracking-wide transition duration-300 border-none rounded-lg font-montserrat text-lightBg bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Create Note
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h1"
                  className="text-2xl font-bold tracking-tight text-center font-montserrat text-darkBg"
                >
                  Create New Note
                </Dialog.Title>
                <div className="mt-2">
                  <form
                    className="px-8 pt-6 pb-8 bg-white"
                    onSubmit={submitHandler}
                  >
                    <div className="mb-4">
                      <label className="block mb-2 text-lg font-bold tracking-wide text-darkBg font-robot">
                        Title
                      </label>
                      <input
                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="title"
                        type="text"
                        placeholder="Enter Title"
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
                        onChange={(e) => setCategory(e.target.value)}
                      />
                    </div>
                    <div className="flex items-center justify-center gap-4">
                      <button
                        type="submit"
                        className="px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        onClick={closeModal}
                      >
                        Create
                      </button>
                      <button
                        type="button"
                        className="px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        onClick={resetHandler}
                      >
                        Reset
                      </button>
                      <button
                        type="button"
                        className="px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        onClick={closeModal}
                      >
                        Close
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CreateNoteModal;
