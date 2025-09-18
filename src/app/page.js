import Image from "next/image";
import styles from "./page.module.css";
import Slider from "@/components/slider/Slider";
import About from "@/components/about/about";
import Contact from "@/components/contact/contact";
import ResidentialDevelopment from "@/components/residential-developments/residential-development";

export default function Home() {
  return (
    <div>

      <Slider />
      <About />
      <Contact />
      <ResidentialDevelopment />
    </div>
  );
}
