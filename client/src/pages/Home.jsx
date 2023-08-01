import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_IMAGES } from "../utils/queries";

// const slides = [
//   "https://i.ibb.co/ncrXc2V/1.png",
//   "https://i.ibb.co/B3s7v4h/2.png",
//   "https://i.ibb.co/XXR8kzF/3.png",
//   "https://i.ibb.co/yg7BSdM/4.png",
// ];

const Home = () => {
  const { loading, error, data } = useQuery(QUERY_ALL_IMAGES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  
  const images = data?.images || [];

  return (
    <div>
      <Navbar />
    <div className="container">
      <h1 className="text-6xl text-center p-8">Welcome</h1>
      <div className="max-w-lg mx-auto">
        {images.length > 0 ? ( // Check if there are images available
            <Carousel>
              {images.map((image) => (
                <img src={image.image} alt="Slide" key={image._id} />
              ))}
            </Carousel>
          ) : (
            <p>No Images available</p>
          )}
      </div>
    </div>
    </div>
  );
};

export default Home;
