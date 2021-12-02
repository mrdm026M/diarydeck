import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { HiChevronDown } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../actions/userAction";

const AccountMenu = ({ user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white rounded-md bg-normalBg bg-opacity-30 hover:bg-opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <img src={user.avatar} alt={user.name} className="mr-3 w-7 h-7" />
            <p className="text-lg font-roboto">{user.name}</p>
            <HiChevronDown
              className="ml-2 -mr-1 text-lightBg w-7 h-7 hover:text-lightBg"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-normalBg text-white" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-base font-montserrat font-semibold`}
                    onClick={logoutHandler}
                  >
                    Logout
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default AccountMenu;
