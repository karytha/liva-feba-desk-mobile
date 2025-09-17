import Image from "next/image";
import styles from "./page.module.css";
import Slider from "@/components/slider/Slider";
import About from "@/components/about/about";

export default function Home() {
  return (
    <div>

      <Slider />
      <About />
    </div>
  );
}
