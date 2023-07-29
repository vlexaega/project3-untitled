// import Navbar from "../components/Navbar";
import PlaceholderNav from "../components/PlaceholderNav";
import Carousel from "../components/Carousel";
// import { Carousel, initTE } from "tw-elements";

const images = [
  "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const Home = () => {
  return (
    <div className="container">
      {/* <Navbar /> */}
      <PlaceholderNav />
      <h1 className="text-6xl text-center p-8">Welcome</h1>
      <Carousel images={images} />
    </div>
  );
};

export default Home;
