import React from "react";
import { Disclosure } from "@headlessui/react";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteNoteAction } from "../../actions/noteAction";

const NotesAccordian = ({ note }) => {
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteNoteAction(id));
    }
  };

  return (
    <div>
      <div className="max-w-md p-1 mx-auto bg-gray-800 w-80 md:w-96 rounded-xl">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-left rounded-lg text-lightBg bg-normalBg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className="text-lg font-medium tracking-tight font-montserrat">
                  {note.title}
                </span>
                <div className="flex gap-4">
                  <a href={`/note/${note._id}`}>
                    <MdEdit className="w-6 h-6 text-lightBg hover:text-lightBlue" />
                  </a>
                  <MdDelete
                    className="w-6 h-6 text-lightBg hover:text-lightBlue"
                    onClick={() => deleteHandler(note._id)}
                  />
                </div>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2">
                <span className="p-1 text-sm border-2 rounded-md font-montserrat text-lightBg border-lightBg">
                  {note.category}
                </span>
                <p className="mt-4 mb-2 text-base tracking-wide font-roboto text-lightBg">
                  {note.content}
                </p>
                <span>Created on - {note.createdAt.substring(0, 10)}</span>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default NotesAccordian;
