import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCards from "@/components/ProductCards";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <ProductCards />
      <Banner />
    </>
  );
}
