import {Helmet} from "react-helmet-async";
import Banner from "../components/Banner/Banner";
import {useLoaderData} from "react-router-dom";
import Estate from "../components/Estate/Estate";

const home = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const estateData = useLoaderData();
  console.log(estateData);
  return (
    <div>
      <Helmet>
        <title>Home | BusinessBlast</title>
      </Helmet>
      <Banner />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:w-3/4 mx-auto">
        {estateData.map((estate) => (
          <Estate key={estate.id} item={estate}></Estate>
        ))}
      </div>
    </div>
  );
};

export default home;
