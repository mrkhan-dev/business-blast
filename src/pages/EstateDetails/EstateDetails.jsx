import {useLoaderData, useParams} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";

const EstateDetails = () => {
  const allData = useLoaderData();
  const {id} = useParams();
  const idInt = parseInt(id);
  const data = allData.find((data) => data.id === idInt);
  console.log(data);

  useEffect(() => {
    AOS.init({duration: 1000});
    AOS.refresh();
  }, []);

  return (
    <div className="lg:w-3/4 mx-auto flex gap-8">
      <div data-aos="zoom-in-down">
        <img className="rounded-lg lg:h-[550px]" src={data.image} />
      </div>
      <div data-aos="zoom-in-up" className="w-1/2">
        <h2 className="text-4xl font-medium">{data.estate_title}</h2>
        <p className="text-xl"> segment : {data.segment_name} </p>
        <div className="divider w-[610px]"></div>
        <div className="text-lg">
          <p>
            {" "}
            <span className="text-xl font-medium">Description :</span>{" "}
            {data.description}
          </p>
          <p className="mt-8">
            {" "}
            <span className="text-xl font-medium">Status :</span> {data.status}{" "}
          </p>
          <p>
            {" "}
            <span className="text-xl font-medium">Price :</span> {data.price}{" "}
          </p>
          <p>
            {" "}
            <span className="text-xl font-medium">Area : </span> {data.area}{" "}
          </p>
          <p>
            {" "}
            <span className="text-xl font-medium">Location :</span>{" "}
            {data.location}
          </p>
        </div>
        <div className="divider w-[610px]"></div>
        <p className="text-xl font-semibold">Facilities :</p>
        {data.facilities.map((fec, idx) => (
          <ul key={idx}>
            <li className="flex items-center gap-2">
              <p className="text-4xl mt-[-20px]">.</p>
              {fec}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default EstateDetails;
