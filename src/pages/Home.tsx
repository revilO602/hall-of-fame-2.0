import videoBg from "/src/assets/homeVideo.mp4";
import { Carousel } from "react-responsive-3d-carousel";
import "react-responsive-3d-carousel/dist/styles.css";
import SectionCard from "../components/SectionCard";
import coachesImg from "/src/assets/MainMenu/coaches.png";
import dressRoomImg from "/src/assets/MainMenu/dressRoom.png";
import msImg from "/src/assets/MainMenu/ms2002.png";
import pressImg from "/src/assets/MainMenu/press.png";
import staffImg from "/src/assets/MainMenu/staff.png";
import tbdImg from "/src/assets/MainMenu/tbd.png";

const items = [
  <SectionCard backgroundImage={tbdImg} />,
  <SectionCard backgroundImage={msImg} />,
  <SectionCard backgroundImage={dressRoomImg} />,
  <SectionCard backgroundImage={staffImg} />,
  <SectionCard backgroundImage={coachesImg} />,
  <SectionCard backgroundImage={pressImg} />,
  <SectionCard backgroundImage={tbdImg} />,
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
          boxShadow="0"
          indicators={{ translate: ["0px", "-50px"] }}
        />
      </div>
    </>
  );
}

export default Home;
