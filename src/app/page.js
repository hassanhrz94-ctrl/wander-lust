import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     
<Banner/>
     {/* <Footer/> */}
    </div>
  );
}
