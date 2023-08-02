import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import MainLogo from "../../assets/MainLogo.png";

function Navbar() {
  return (
    <nav className="bg-white-200 shadow-lg py-12">
      <div className="mx-inherit max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {/* <!--
                        Icon when menu is closed.

                        Menu open: "hidden", Menu closed: "block"
                    --> */}
              <svg></svg>
              {/* <!--
                        Icon when menu is open.

                        Menu open: "block", Menu closed: "hidden"
                    --> */}
              <svg>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center align-middlesm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="h-44 w-auto"
                src={MainLogo}
                alt="logo for untitled"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                {/* if logged in is true */}
                {Auth.loggedIn() ? (
                  <>
                    <Link
                      to="/home"
                      className="text-zinc-950 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                      aria-current="page"
                    >
                      Home
                    </Link>
                    <Link
                      to="/profile"
                      className="text-zinc-950 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/artists"
                      className="text-zinc-950 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Artists
                    </Link>
                    <Link
                      to="/artbymedium"
                      className="text-zinc-950 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Art By Medium
                    </Link>
                    <Link
                      to="/checkout"
                      className="text-zinc-950 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Checkout
                    </Link>
                    <Link
                      to="/orderhistory"
                      className="text-zinc-950 hover:bg-gray-700 hover:text-white rounded-md px-4 py-2 text-sm font-medium"
                    >
                      Order History
                    </Link>
                    <Link
                      to="/"
                      onClick={() => Auth.logout()}
                      className="text-zinc-950 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Logout
                    </Link>
                  </>
                ) : (
                  // {*/ if loggedIn is false*/}
                  <>
                    <Link
                      to="/signup"
                      className="text-zinc-950 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Signup
                    </Link>
                    <Link
                      to="/"
                      className="text-zinc-950 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Login
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
          <div>
            {/* <!-- Profile dropdown --> */}
            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="sr-only">Open user menu</span>
                  <img alt="" />
                </button>
              </div>

              {/* <!--
                        Dropdown menu, show/hide based on menu state.

                        Entering: "transition ease-out duration-100"
                        From: "transform opacity-0 scale-95"
                        To: "transform opacity-100 scale-100"
                        Leaving: "transition ease-in duration-75"
                        From: "transform opacity-100 scale-100"
                        To: "transform opacity-0 scale-95"
                    --> */}
              {/* <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                        <!-- Active: "bg-gray-100", Not Active: "" -->
                        <a to="" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
                        <a to="" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
                        <a to="" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
                    </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          <Link
            to="/home"
            className="text-zinc-950 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-larg"
          >
            Home
          </Link>
          <Link
            to="/profile"
            className="text-zinc-950 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-large"
            aria-current="page"
          >
            Profile
          </Link>
          <Link
            to="/artists"
            className="text-zinc-950 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-large"
            aria-current="page"
          >
            Artists
          </Link>
          <Link
            to="/artbymedium"
            className="text-zinc-950 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-large"
          >
            Art by Medium
          </Link>
          <Link
            to="/cart"
            className="text-zinc-950 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-large"
          >
            Cart
          </Link>
          <Link
            to="/orderhistory"
            className="text-zinc-950 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-large"
          >
            Order History
          </Link>
          <Link
            to=""
            className="text-zinc-950 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-large"
          >
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
