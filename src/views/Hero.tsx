import { Badge } from "@/components/ui/badge";
import { Button } from "components/ui/button";
import { ShoppingCart } from "lucide-react";
import heroImage from "../../public/heroImage.webp";


const Hero = () => {
  return (
   <section className="flex h-screen mb-12 bg-fixed bg-center bg-cover custom-img">

    <div className="absolute top-0 left-0 right-0 bottom-0  z-[2] ml-[-10rem] mt-[-10rem]">
    
    </div>
    <div className="flex-1">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-24 ml-24">
          Basit Soap Factroy <br />
          Faisalabad
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6 ml-24">
          The Ultimate Secret Beauty <br />
          Add Brightness to your Clothes.
        </p>
        
        </div>

   </section>
  );
};

export default Hero;
