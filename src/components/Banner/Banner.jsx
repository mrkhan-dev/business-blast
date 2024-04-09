import BannerBg from "../../assets/bg.jpg";

const Banner = () => {
  return (
    <div
      className="w-full bg-no-repeat bg-cover bg-gradient-to-r from-slate-600 to-slate-400 min-h-screen"
      style={{
        backgroundImage: `url(${BannerBg})`,
      }}
    ></div>
  );
};

export default Banner;
