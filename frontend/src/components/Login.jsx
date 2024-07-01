import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { name, email, password } = value;

  const inputHandler = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/user/login", {
        name,
        email,
        password,
      });
      console.log(response);
      alert("Login Successful");
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex h-screen flex-1 flex-col justify-center px-6 lg:px-8">
      <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm border shadow rounded px-5 pb-4">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login
          </h2>
        </div>
        <form className="space-y-3" onSubmit={submitHandler}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email Address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Email Address"
                className="block w-full rounded-md border-0 ps-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={inputHandler}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Password"
                className="block w-full rounded-md border-0 ps-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={inputHandler}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-3 text-center text-sm text-gray-500">
          Don{"'"}t have an account{" "}
          <a
            href="/sign-up"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
