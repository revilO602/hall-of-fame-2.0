import videoBg from "/src/assets/homeVideo.mp4";
import { Carousel } from "react-responsive-3d-carousel";
import "react-responsive-3d-carousel/dist/styles.css";
import SectionCard from "../components/SectionCard";
const items = [
  <SectionCard title="Sieň Slávy" />,
  <SectionCard title="Majstrovstvá 2002" />,
  <SectionCard title="Šatňa" />,
  <SectionCard title="Funkcionári" />,
  <SectionCard title="Šatňa trénerov" />,
  <SectionCard title="Press Centrum" />,
  <SectionCard title="TBD" />,
];

function Home() {
  return (
    <>
      <div className="flex h-screen w-screen justify-center items-center relative">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Carousel
          containerHeight="100%"
          showArrows={true}
          showIndicators={true}
          showStatus={false}
          items={items}
          startIndex={0}
          width="300px"
          height="400px"
          indicators={{ translate: ["0px", "-50px"] }}
        />
      </div>
    </>
  );
}

export default Home;
