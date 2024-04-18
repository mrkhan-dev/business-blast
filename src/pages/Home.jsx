import {useEffect, useState} from "react";
import Banner from "../components/Banner/Banner";
import Estate from "../components/Estate/Estate";
import {Helmet} from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";

const home = () => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);

  useEffect(() => {
    AOS.init({duration: 1000});
    AOS.refresh();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Home | BusinessBlast</title>
      </Helmet>
      <Banner />
      <div
        data-aos="fade-down"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:w-3/4 mx-auto"
      >
        {card.map((estate) => (
          <Estate key={estate.id} item={estate}></Estate>
        ))}
      </div>
    </div>
  );
};

export default home;
