import videoBg from "/src/assets/homeVideo.mp4";
import { Carousel, Indicators } from "react-responsive-3d-carousel";
import "react-responsive-3d-carousel/dist/styles.css";
import SectionCard from "../components/SectionCard";
const items = [
  <SectionCard backgroundImage="/path/to/image.jpg" title="Sieň Slávy" />,
  <SectionCard
    backgroundImage="/path/to/image.jpg"
    title="Majstrovstvá 2002"
  />,
  <SectionCard backgroundImage="/path/to/image.jpg" title="Šatňa" />,
  <SectionCard backgroundImage="/path/to/image.jpg" title="Funkcionári" />,
  <SectionCard backgroundImage="/path/to/image.jpg" title="Šatňa trénerov" />,
  <SectionCard backgroundImage="/path/to/image.jpg" title="Press Centrum" />,
  <SectionCard backgroundImage="/path/to/image.jpg" title="TBD" />,
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
