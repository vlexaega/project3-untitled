
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";

const slides = [
  "https://i.ibb.co/ncrXc2V/1.png",
  "https://i.ibb.co/B3s7v4h/2.png",
  "https://i.ibb.co/XXR8kzF/3.png",
  "https://i.ibb.co/yg7BSdM/4.png",
];

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <h1 className="text-6xl text-center p-8">Welcome</h1>
      <div className="max-w-lg mx-auto">
        <Carousel>
          {slides.map((s) => (
            <img src={s} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
