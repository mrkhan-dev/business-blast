import {useLoaderData, useParams} from "react-router-dom";

const EstateDetails = () => {
  const allData = useLoaderData();
  const {id} = useParams();
  const idInt = parseInt(id);
  const data = allData.find((data) => data.id === idInt);
  console.log(data);
  return (
    <div className="lg:w-3/4 mx-auto flex gap-8">
      <div className="bg-[#1313130D] rounded-xl">
        <img className="px-8 py-8" src={data.image} />
      </div>
      <div className="w-1/2">
        <h2 className="text-4xl font-medium">{data.estate_title}</h2>
        <p className="text-xl"> segment : {data.segment_name} </p>
        <div className="divider w-[610px]"></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa,
          accusantium beatae! Magnam non quidem dolorem error voluptate? Quidem
          eius consequuntur suscipit nesciunt quam aspernatur aut nam cum,
          cupiditate iure blanditiis. Cupiditate, eius accusamus. Odio a
          delectus explicabo quia. Dolorem quibusdam itaque mollitia praesentium
          laboriosam pariatur magni eos, tempore voluptatem, accusantium
          asperiores, quia reprehenderit totam. Dicta officiis dolores
          exercitationem esse reiciendis odio atque voluptatibus laudantium
          rerum quae? Iste accusamus voluptatum cupiditate, explicabo
          necessitatibus quaerat, repellat ullam assumenda nam quo nobis fuga
          officia dignissimos molestias omnis soluta iusto? Corporis debitis
          cumquer Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
          nostrum veniam praesentium? In voluptatibus consequatur ipsam vero
          ipsum minus facilis, sed eaque quo ex quam totam quia harum. Quae at
          omnis quibusdam explicabo? Consequuntur cupiditate tenetur,
          consectetur blanditiis asperiores repudiandae fugiat tempora, mollitia
          magni deleniti vero provident commodi assumenda dicta error, placeat
          nisi ex molestias dolores cum? Tenetur deleniti deserunt a incidunt
          debitis reprehenderit inventore, odit quo libero ullam sed amet ab
          numquam cum, veritatis veniam eos dolorem minus quisquam, quod
          cupiditate ex sit ea ad. Consequuntur dolore recusandae repellendus
          vel mo
        </p>
      </div>
    </div>
  );
};

export default EstateDetails;
