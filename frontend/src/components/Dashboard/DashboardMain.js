import React from "react";

const DashboardMain = () => {
  return (
    <main className="px-6 py-6 mx-auto max-w-7xl">
      <section className="my-4">
        <p className="mb-6 text-base font-normal tracking md:text-xl font-montserrat">
          Dashboard
        </p>
        <h1 className="text-2xl font-semibold tracking md:text-3xl font-montserrat">
          Good Morning, <br />
          Dhruv
        </h1>
      </section>
      <section className="flex flex-col gap-8 py-4 mt-12 md:flex-row">
        <a href="/tasks" className="w-full">
          <div className="flex items-center justify-center transition duration-200 border-2 rounded-lg border-normalBg h-80 hover:border-lightBg">
            <h1 className="text-2xl font-semibold tracking md:text-3xl font-montserrat">
              Tasks
            </h1>
          </div>
        </a>

        <a href="/notes" className="w-full">
          <div className="flex items-center justify-center transition duration-200 border-2 rounded-lg border-normalBg h-80 hover:border-lightBg">
            <h1 className="text-2xl font-semibold tracking md:text-3xl font-montserrat">
              Notes
            </h1>
          </div>
        </a>

        <a href="/budget" className="w-full">
          <div className="flex items-center justify-center transition duration-200 border-2 rounded-lg border-normalBg h-80 hover:border-lightBg">
            <h1 className="text-2xl font-semibold tracking md:text-3xl font-montserrat">
              Budget
            </h1>
          </div>
        </a>
      </section>
    </main>
  );
};

export default DashboardMain;
