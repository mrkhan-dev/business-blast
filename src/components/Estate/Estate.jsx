import PropTypes from "prop-types";
const Estate = ({item}) => {
  const {estate_title, price, status, image, facilities, segment_name} = item;
  return (
    <div>
      <div className="border rounded-2xl mt-8">
        <div className="p-6">
          <img className="rounded-xl relative" src={image} alt="" />
          <button className="px-4 py-2 text-white rounded-bl-md rounded-tr-md absolute mt-[-40px] bg-[#FC6400]">
            {status}
          </button>
        </div>
        <div className="px-6">
          <p className=" text-2xl font-bold">{estate_title}</p>
          <p>Segment : {segment_name} </p>
          <p className="text-xl font-medium mb-4"> {price} </p>
          <hr className="mb-4" />
        </div>
        <div className="px-6">
          <p className="text-xl font-semibold">Facilities :</p>
          {facilities.map((fec, idx) => (
            <ul key={idx}>
              <li className="flex items-center gap-2">
                <p className="text-4xl mt-[-20px]">.</p>
                {fec}
              </li>
            </ul>
          ))}
          <div className="card-actions justify-end mb-4">
            <button className="btn bg-[#1DD100] text-white hover:bg-[#1dd100]">
              View Property
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Estate.propTypes = {
  item: PropTypes.node,
};

export default Estate;
