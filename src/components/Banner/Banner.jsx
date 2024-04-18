import BannerBg from "../../assets/bg.jpg";

const Banner = () => {
  return (
    <div
      className="w-full bg-no-repeat bg-cover min-h-screen lg:flex lg:px-64 gap-8"
      style={{
        backgroundImage: `url(${BannerBg})`,
      }}
    >
      <div className=""></div>
    </div>
  );
};

export default Banner;
