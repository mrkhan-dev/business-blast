import {Helmet} from "react-helmet-async";
import {FaFacebook, FaTwitter} from "react-icons/fa";
import {RiInstagramLine} from "react-icons/ri";

const About = () => {
  return (
    <div className="flex justify-between px-64 mt-8 gap-4">
      <Helmet>
        <title>About | BusinessBlast</title>
      </Helmet>
      <div className="shadow-md w-1/2 rounded-md">
        <h1 className="text-4xl text-center font-bold ">
          Welcome to Business Blast
        </h1>
        <p className="px-2 text-lg mb-5 font-medium mt-20">
          At Business Blast, we are passionate about supporting entrepreneurs at
          every stage of their journey, from aspiring visionaries with a spark
          of inspiration to seasoned professionals looking to scale their
          ventures. Our mission is to provide a dynamic platform where
          creativity, collaboration, and commerce converge to drive meaningful
          impact in the business world. Founded with the belief that every idea
          deserves a chance to flourish, Business Blast offers a diverse range
          of resources, tools, and insights tailored to meet the evolving needs
          of todays entrepreneurs. Whether you are seeking guidance on startup
          strategies, exploring funding opportunities, or searching for the
          latest industry trends, we are here to empower you with the knowledge
          and networks needed to succeed.
        </p>
        <div className="">
          <p className="text-xl font-medium divider">Social Links</p>
          <div className="flex justify-center items-center gap-4 text-2xl mb-8">
            <FaFacebook />
            <RiInstagramLine />
            <FaTwitter />
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <img
          className="lg:h-[564px] rounded-md"
          src="https://i.ibb.co/n89TK8W/cheerful-friends-having-fun-while-talking-waiter-cafe.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
