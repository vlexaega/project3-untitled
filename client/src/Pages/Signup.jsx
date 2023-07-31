import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

// eslint-disable-next-line no-unused-vars
function Signup(props) {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    bio: "",
  });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        userName: formState.userName,
        email: formState.email,
        password: formState.password,
        bio: formState.bio,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
    localStorage.setItem("userName", formState.userName);
    localStorage.setItem("bio", formState.bio);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <Link to="/login">← Go to Login</Link>

      <h2 className="text-6xl text-center p-8">Signup</h2>
      <div className="w-full max-w-xs block">
        <form
          onSubmit={handleFormSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="flex-row space-between my-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstName"
            >
              User Name:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="User"
              name="userName"
              type="userName"
              id="userName"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label
              htmlFor="firstName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Bio:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 pb-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Bio"
              name="bio"
              type="bio"
              id="bio"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label
              htmlFor="pwd"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row flex-end">
            <button
              className="mt-1 btn btn-block btn-primary bg-gray-600 hover:bg-slate-950 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
