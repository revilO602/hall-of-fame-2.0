// @ts-nocheck
import { useState } from "react";
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import DressingRoomImg from "/src/assets/dressRoomV7.png";
import PalfyVid from "/src/assets/DressRoom/AnimovanyPalfyV3.mp4";
import { MarkersPlugin } from "@photo-sphere-viewer/markers-plugin";
import "@photo-sphere-viewer/markers-plugin/index.css";
import PlayerCards from "../components/Player/PlayerCards";

function DressingRoom() {
  const [showPlayerCards, setShowPlayerCards] = useState(false);
  // const togglePlayerCards = () => {
  //   setShowPlayerCards((prev) => !prev);
  // };

  const hidePlayerCards = (event) => {
    if (showPlayerCards && !event.target.closest("#player-cards")) {
      setShowPlayerCards(false);
    }
  };

  const handleReady = (instance) => {
    const markersPlugs = instance.getPlugin(MarkersPlugin);
    if (!markersPlugs) return;
    markersPlugs.addEventListener("select-marker", () => {
      setShowPlayerCards(true);
    });
  };

  const anchor = document.createElement("button");
  anchor.type = "button";
  anchor.style.display = "block";
  anchor.style.backgroundColor = "red";
  anchor.style.opacity = "0.7";
  anchor.style.width = "12rem";
  anchor.style.height = "18rem";

  const plugins = [
    [
      MarkersPlugin,
      {
        markers: [
          {
            id: "text",
            position: { yaw: -0.1, pitch: 0.025 },
            elementLayer: anchor,
            anchor: "center",
            scale: [1, 3],
            tooltip: {
              content: "test",
              position: "right",
            },
          },
        ],
      },
    ],
  ];

  return (
    <>
      <div
        className="flex h-screen w-screen justify-center items-center"
        onClick={hidePlayerCards}
      >
        <ReactPhotoSphereViewer
          src={DressingRoomImg}
          height={"100vh"}
          width={"100%"}
          minFov={38}
          maxFov={110}
          defaultZoomLvl={0}
          plugins={plugins}
          onReady={handleReady}
        ></ReactPhotoSphereViewer>
        {showPlayerCards && (
          <div id="player-cards">
            <PlayerCards video={PalfyVid} />
          </div>
        )}
      </div>
    </>
  );
}

export default DressingRoom;
