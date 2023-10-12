// import { Link } from 'react-router-dom';
// import pic from '../../assets/restauranfood.jpg';

import CallToAction from "../components/home/CallToAction";
import Specials from "../components/home/Specials";
import Testimonials from "../components/home/Testimonials";
import About from "../components/home/About";

function Home() {
  return (
    <main>
      <CallToAction />
      <Specials />
      <Testimonials />
      <About />
    </main>
  );
}

export default Home;
