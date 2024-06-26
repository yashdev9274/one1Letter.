import Footer from "@/components/home/footer";
import { Grid } from "@/components/home/grid";
import Hero from "@/components/home/hero";
import Navbar from "@/components/home/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">

        <Navbar />
        <Hero />
        <Grid />
        <Footer />
        {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"> */}
        {/* </div> */}


      </section>
    </>
  );
}
