// import { useEffect } from "react";
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import DressingRoomImg from "/src/assets/dressRoomV7.png";
// import { Viewer } from "@photo-sphere-viewer/core";
// import "@photo-sphere-viewer/core/index.css";
function DressingRoom() {
  // const [currentImage, setCurrentImage] = useState(DressingRoomImgV4);

  // const toggleImage = () => {
  //   setCurrentImage((prevImage) =>
  //     prevImage === DressingRoomImgV4 ? DressingRoomImgV3 : DressingRoomImgV4
  //   );
  // };

  // useEffect(() => {
  //   const viewer = new Viewer({
  //     container: "viewer",
  //     panorama: DressingRoomImg,
  //     // minFov: 62,
  //     // maxFov: 140,
  //     // fisheye: true,
  //     // zoomSpeed: 0.5,
  //     // moveInertia: true,
  //     // defaultZoomLvl: 0,
  //   });

  //   return () => {
  //     viewer.destroy();
  //   };
  // }, []);

  return (
    <>
      <div className="flex h-screen w-screen justify-center items-center">
        {/* <div
          id="viewer"
          className="flex h-screen w-screen justify-center items-center"
        ></div> */}
        <ReactPhotoSphereViewer
          src={DressingRoomImg}
          height={"100vh"}
          width={"100%"}
          minFov={38}
          maxFov={110}
          defaultZoomLvl={0}
        ></ReactPhotoSphereViewer>
        {/* <button
          onClick={toggleImage}
          className="absolute top-4 right-4 bg-blue-500 text-black p-2 rounded"
        >
          Toggle Lightning
        </button> */}
      </div>
    </>
  );
}

export default DressingRoom;
