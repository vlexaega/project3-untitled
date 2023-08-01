import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";

const NoMatch = () => {
  return (
    <div>
        <Navbar />
        <Jumbotron>
          <h1>404 Page Not Found</h1>
          <h1>
            <span role="img" aria-label="Face With Rolling Eyes Emoji">
              🙄
            </span>
          </h1>
        </Jumbotron>
    </div>
  );
};

export default NoMatch;

