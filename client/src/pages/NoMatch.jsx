
import Navbar from "../components/Navbar";
import Pug from "../assets/pug.jpg";

const NoMatch = () => {
  return (
    <div>
      <Navbar />

        <h1 className="text-6xl text-center p-8">404 Page Not Found</h1>
        <h1>
          <img
            src={Pug}
            alt="Cute Artsy Pug"
            className="max-h-screen mx-auto object-scale-down h-46 w-96"
          />
        </h1>

    </div>
  );
};

export default NoMatch;
