import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import DressingRoomImg from "/src/assets/dressRoomV3.png";

function DressingRoom() {
  return (
    <>
      <div className="flex h-screen w-screen justify-center items-center">
        <ReactPhotoSphereViewer
          src={DressingRoomImg}
          height={"100vh"}
          width={"100%"}
        ></ReactPhotoSphereViewer>
      </div>
    </>
  );
}

export default DressingRoom;
