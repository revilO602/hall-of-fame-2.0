import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import DressingRoomImg from "/src/assets/dressRoomV7.png";
import { MarkersPlugin } from "@photo-sphere-viewer/markers-plugin";
import "@photo-sphere-viewer/markers-plugin/index.css";
function DressingRoom() {
  const plugins = [
    [
      MarkersPlugin,
      {
        markers: [
          {
            // html marker with custom style
            id: "text",
            position: { yaw: -0.1, pitch: 0 },
            elementLayer: "HTML <b>marker</b> &hearts;",
            anchor: "center",
            scale: [1, 3],
            style: {
              maxWidth: "100px",
              color: "white",
              fontSize: "20px",
              fontFamily: "Helvetica, sans-serif",
              textAlign: "center",
              //test
              backgroundColor: "red",
              opacity: 0.7,
            },
            tooltip: {
              content: "An HTML marker",
              position: "right",
            },
          },
        ],
      },
    ],
  ];

  return (
    <>
      <div className="flex h-screen w-screen justify-center items-center">
        <ReactPhotoSphereViewer
          src={DressingRoomImg}
          height={"100vh"}
          width={"100%"}
          minFov={38}
          maxFov={110}
          defaultZoomLvl={0}
          plugins={plugins}
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
