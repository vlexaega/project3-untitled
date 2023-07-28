import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import MainLogo from "../assets/MainLogo.png";

import Auth from "../utils/auth";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <main className="block">
      <div className="flex flex-col justify-center items-center w-screen h-screen">
        <img src={MainLogo} alt="Untitled Logo" className="w-60 h-auto" />
        <div className="card block">
          {/* <h4 className="card-header bg-dark text-light p-2">Login:</h4> */}
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{" "}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <div className="w-full max-w-xs block">
                <form
                  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                  onSubmit={handleFormSubmit}
                >
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="Email"
                    >
                      Email:
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Your email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="password"
                    >
                      Password:
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="******"
                      name="password"
                      type="password"
                      value={formState.password}
                      onChange={handleChange}
                    />
                  </div>
                  <button
                    className="btn btn-block btn-primary bg-gray-600 hover:bg-slate-950 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    style={{ cursor: "pointer" }}
                    type="submit"
                  >
                    Submit
                  </button>
                  <button
                    className="ml-4 btn btn-block btn-primary bg-gray-600 hover:bg-slate-950 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    style={{ cursor: "pointer" }}
                    type="signup"
                  >
                    <Link to="/signup">Signup</Link>
                  </button>
                </form>
              </div>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
