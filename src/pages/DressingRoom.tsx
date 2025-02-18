// import { useState } from "react";
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import DressingRoomImg from "/src/assets/dressRoomV6.png";

function DressingRoom() {
  // const [currentImage, setCurrentImage] = useState(DressingRoomImgV4);

  // const toggleImage = () => {
  //   setCurrentImage((prevImage) =>
  //     prevImage === DressingRoomImgV4 ? DressingRoomImgV3 : DressingRoomImgV4
  //   );
  // };

  return (
    <>
      <div className="flex h-screen w-screen justify-center items-center">
        <ReactPhotoSphereViewer
          src={DressingRoomImg}
          height={"100vh"}
          width={"100%"}
          minFov={40}
          maxFov={60}
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
