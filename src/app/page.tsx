import Banner from "@/components/homepage/banner";
import Library from "@/components/homepage/Library";
import Image from "next/image";

export default function Home() {
  return (
   <main className="min-h-screen bg-black p-10">
    <Banner/>
    
    <Library/>
       
    <h1>Fit Log Home</h1>
   </main>
  );
}
