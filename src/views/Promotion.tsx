import { Button } from "components/ui/button";
import { Badge } from "../../components/ui/badge";
import Image from "next/image";
import BS11 from "public/BS11.png";
import BS18 from "public/BS18.jpg";
import BS17 from "public/BS17.jpg";

const Promotion = () => {
  return (
    <div className="mt-20">
      <div className="flex flex-col items-center">
        <Badge className="text-blue-600   bg-white">PROMOTIONS</Badge>
        <p className="font-sans font-bold text-4xl text-zinc-800">
          Our Promotions Attractions
        </p>
      </div>
      <section className="flex justify-center gap-8 mt-10 text-md">
        {/* Left Side */}
        <div className="flex flex-col">
          <div className="flex bg-yellow-300 px-28 h-full mb-4 hover:scale-125 duration-1000 overflow-hidden shallow-lg">
            <div>
              <h1 className="mt-10 font-bold text-4xl mr-10 -ml-4">
                We offer discount on bulk <span>10%</span>
              </h1>
              <p className="text-lg ">For all seasons it glows</p>
            </div>
            <Image
              className="object-cover mr-16 pr-16 "
              src={BS11}
              alt="BS11Image"
              width="400"
              height="200"
            />
          </div>

          <div className="text-white bg-zinc-800 text-center h-full hover:scale-125 duration-1000 overflow-hidden shallow-lg">
            <div className="mt-10">
              <h1 className="font-bold text-4xl">
                GET <span>10% </span>Off
              </h1>
              <p className="mt-3 text-sm">USE PROMO CODE</p>
            </div>
            <Button className="mt-1 text-md  bg-neutral-700">
              G L O B A L  S A L E S  A T T R A C T I O N S
            </Button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex ">
          <div className="bg-orange-100 mr-4 mt-1 hover:scale-125 duration-1000 overflow-hidden shallow-lg">
            <p className=" ml-3 mt-1 font-bold">Glow Lemon Fruity Soap</p>
            <span className="ml-3">
              Rs.90.00 <span className="font-bold ">Rs.70.00</span>
            </span>
            <Image
              className="object-cover mt-8"
              src={BS18}
              alt="event2Image"
            />
          </div>

          <div className="bg-neutral-300  mr-4 mt-2 hover:scale-125 duration-1000 overflow-hidden shallow-lg">
            <p className="mt-3 ml-3 font-bold">Glow Almond Beauty Soap</p>
            <span className="ml-3">
              Rs.100.00 <span className="font-bold">Rs.90.00</span>
            </span>
            <Image
              className="object-cover mt-5"
              src={BS17}
              alt="BS17Image"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Promotion;
