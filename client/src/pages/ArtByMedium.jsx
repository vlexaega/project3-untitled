import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_IMAGES } from "../utils/queries";

const ArtByMedium = () => {
  const { loading, error, data } = useQuery(QUERY_ALL_IMAGES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const images = data?.images || [];

  // A very helpful article from freecodecamp.org showed me how to use the array.find() method, please see the README for the link

  // searches finds an image with digital medium and stores it as a variable
  function getDigital(image) {
    return image.selectedMedium === "Digital";
  }
  let digitalImg = images.find((image) => getDigital(image));

  // searches finds an image with digital medium and stores it as a variable
  function getPhotography(image) {
    return image.selectedMedium === "Photography"
  }
  let photoImg = images.find(image => getPhotography(image))

  // searches finds an image with painting medium and stores it as a variable
  function getPainting(image) {
    return image.selectedMedium === "Painting"
  }
  let paintingImg = images.find(image => getPainting(image))

  // searches finds an image with drawing medium and stores it as a variable
  function getDrawing(image) {
    return image.selectedMedium === "Drawing"
  }
  let drawingImg = images.find(image => getDrawing(image))

  // searches finds an image with mixed media medium and stores it as a variable
  function getMixedMedia(image) {
    return image.selectedMedium === "Mixed Media"
  }
  let mixedMediaImg = images.find(image => getMixedMedia(image))

  // searches finds an image with fabric medium and stores it as a variable
  function getFabric(image) {
    return image.selectedMedium === "Fabric"
  }
  let fabricImg = images.find(image => getFabric(image))

  return (
    <div>
      <Navbar />
      <h1 className="text-6xl text-center p-8">Art by Medium</h1>

      {/* This div is a card for paintings */}
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg">
            <Link
                    // to={`/workofart/${paintingImg._id}`} key={paintingImg._id}
                    to="/home"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="p-2 rounded max-h-96 max-w-sm"
                      // src={paintingImg.image}
                      src="https://picsum.photos/600/400/?random"
                      alt="digital artwork"
                    />
                  </Link>

              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-3xl">
                  <a
                    className="no-underline hover:underline text-black"
                    href="#"
                  >
                    Paintings
                  </a>
                </h1>
              </header>

              <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <a
                  className="flex items-center no-underline hover:underline text-black"
                  href="#"
                ></a>
                <a
                  className="no-underline text-grey-darker hover:text-red-dark"
                  href="#"
                >
                  <span className="hidden">Like</span>
                  <i className="fa fa-heart"></i>
                </a>
              </footer>
            </article>
          </div>

          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg">
            <Link
                    // to={`/workofart/${drawingImg._id}`} key={drawingImg._id}
                    to="/home"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="p-2 rounded max-h-96 max-w-sm items-center"
                      // src={drawingImg.image}
                      src="https://picsum.photos/600/400/?random"
                      alt="digital artwork"
                    />
                  </Link>

              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-3xl">
                  <a
                    className="no-underline hover:underline text-black"
                    href="#"
                  >
                    Drawings
                  </a>
                </h1>
              </header>

              <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <a
                  className="flex items-center no-underline hover:underline text-black"
                  href="#"
                ></a>
                <a
                  className="no-underline text-grey-darker hover:text-red-dark"
                  href="#"
                >
                  <span className="hidden">Like</span>
                  <i className="fa fa-heart"></i>
                </a>
              </footer>
            </article>
          </div>

          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg">
            <Link
                    // to={`/workofart/${mixedMediaImg._id}`} key={mixedMediaImg._id}
                    to="/home"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="p-2 rounded max-h-96 max-w-sm items-center"
                      // src={mixedMediaImg.image}
                      src="https://picsum.photos/600/400/?random"
                      alt="digital artwork"
                    />
                  </Link>

              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-3xl">
                  <a
                    className="no-underline hover:underline text-black"
                    href="#"
                  >
                    Mixed Media
                  </a>
                </h1>
              </header>

              <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <a
                  className="flex items-center no-underline hover:underline text-black"
                  href="#"
                ></a>
                <a
                  className="no-underline text-grey-darker hover:text-red-dark"
                  href="#"
                >
                  <span className="hidden">Like</span>
                  <i className="fa fa-heart"></i>
                </a>
              </footer>
            </article>
          </div>

          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg">
            <Link
                    // to={`/workofart/${digitalImg._id}`} key={digitalImg._id}
                    to="/home"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="p-2 rounded max-h-96 max-w-sm"
                      // src={digitalImg.image}
                      src="https://picsum.photos/600/400/?random"
                      alt="digital artwork"
                    />
                  </Link>

              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-3xl">
                  <a
                    className="no-underline hover:underline text-black"
                    href="#"
                  >
                    Digital
                  </a>
                </h1>
              </header>

              <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <a
                  className="flex items-center no-underline hover:underline text-black"
                  href="#"
                ></a>
                <a
                  className="no-underline text-grey-darker hover:text-red-dark"
                  href="#"
                >
                  <span className="hidden">Like</span>
                  <i className="fa fa-heart"></i>
                </a>
              </footer>
            </article>
          </div>

          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg">
            <Link
                    // to={`/workofart/${fabricImg._id}`} key={fabricImg._id}
                    to="/home"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="p-2 rounded max-h-96 max-w-sm"
                      // src={fabricImg.image}
                      src="https://picsum.photos/600/400/?random"
                      alt="digital artwork"
                    />
                  </Link>

              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-3xl">
                  <a
                    className="no-underline hover:underline text-black"
                    href="#"
                  >
                    Fabric
                  </a>
                </h1>
              </header>

              <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <a
                  className="flex items-center no-underline hover:underline text-black"
                  href="#"
                ></a>
                <a
                  className="no-underline text-grey-darker hover:text-red-dark"
                  href="#"
                >
                  <span className="hidden">Like</span>
                  <i className="fa fa-heart"></i>
                </a>
              </footer>
            </article>
          </div>

          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg">
            <Link
                    // to={`/workofart/${photoImg._id}`} key={photoImg._id}
                    to="/home"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="p-2 rounded max-h-96 max-w-sm"
                      // src={photoImg.image}
                      src="https://picsum.photos/600/400/?random"
                      alt="photography artwork"
                    />
                  </Link>

              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-3xl">
                  <a
                    className="no-underline hover:underline text-black"
                    href="#"
                  >
                    Photography
                  </a>
                </h1>
              </header>

              <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <a
                  className="flex items-center no-underline hover:underline text-black"
                  href="#"
                ></a>
                <a
                  className="no-underline text-grey-darker hover:text-red-dark"
                  href="#"
                >
                  <span className="hidden">Like</span>
                  <i className="fa fa-heart"></i>
                </a>
              </footer>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtByMedium;
