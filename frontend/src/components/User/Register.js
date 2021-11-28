import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
  };

  return (
    <main className="px-6 py-3 mx-auto text-center max-w-7xl">
      <section className="my-6">
        <h1 className="text-2xl font-semibold tracking md:text-4xl font-montserrat">
          Sign up.
        </h1>
      </section>
      <section className="max-w-lg p-4 mx-auto mt-8">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              className="w-full px-4 py-3 mb-4 text-lg font-medium transition duration-150 ease-in-out border-2 outline-none rounded-xl border-normalBg bg-darkBg text-lightBg"
              id="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="email"
              className="w-full px-4 py-3 mb-4 text-lg font-medium transition duration-150 ease-in-out border-2 outline-none rounded-xl border-normalBg bg-darkBg text-lightBg"
              id="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              className="w-full px-4 py-3 mb-4 text-lg font-medium transition duration-150 ease-in-out border-2 outline-none rounded-xl border-normalBg bg-darkBg text-lightBg"
              id="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-center mt-6">
            <button
              type="submit"
              className="px-6 py-4 text-lg font-semibold tracking-wide border-none rounded-xl w-96 font-montserrat text-lightBg bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600"
            >
              Sign In
            </button>
          </div>
          <div className="flex items-center justify-center mt-6">
            <p className="text-lg font-normal text-gray-300 font-roboto">
              Already have an account?{" "}
              <a href="/singin" className="font-medium text-lightBg">
                Sign in
              </a>
            </p>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Register;
