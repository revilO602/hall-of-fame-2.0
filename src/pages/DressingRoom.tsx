// @ts-nocheck
import { useState, useEffect, useRef } from "react";
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import DressingRoomImg from "/src/assets/dressRoomV7.png";
import PalfyVid from "/src/assets/DressRoom/AnimovanyPalfyV4.mp4";
import TestImg from "/src/assets/DressRoom/card1.png";
import { MarkersPlugin } from "@photo-sphere-viewer/markers-plugin";
import "@photo-sphere-viewer/markers-plugin/index.css";
import PlayerCards from "../components/Player/PlayerCards";

function DressingRoom() {
  const [showPlayerCards, setShowPlayerCards] = useState(false);
  const [FOV, setFOV] = useState(84);
  const [src, setSrc] = useState(PalfyVid);
  const [isVideo, setIsVideo] = useState(true);

  const hidePlayerCards = (event) => {
    if (showPlayerCards && !event.target.closest("#player-cards")) {
      setShowPlayerCards(false);
    }
  };

  const handleReady = (instance) => {
    instance.navbar.hide();
    instance.addEventListener("zoom-updated", () => {
      setFOV(instance.state.vFov);
    });
    const markersPlugs = instance.getPlugin(MarkersPlugin);
    if (!markersPlugs) return;
    markersPlugs.addEventListener("select-marker", (event) => {
      if (event.marker.config.id == "text") {
        setSrc(PalfyVid);
        setIsVideo(true);
      } else {
        setSrc(TestImg);
        setIsVideo(false);
      }
      setShowPlayerCards(true);
    });
  };

  const palfy = document.createElement("button");
  palfy.type = "button";
  palfy.style.display = "block";
  palfy.style.backgroundColor = "red";
  palfy.style.opacity = "0.5";
  palfy.style.width = "12rem";
  palfy.style.height = "18rem";

  const test = document.createElement("button");
  test.type = "button";
  test.style.display = "block";
  test.style.backgroundColor = "red";
  test.style.opacity = "0.5";
  test.style.width = "12rem";
  test.style.height = "18rem";

  const plugins = [
    [
      MarkersPlugin,
      {
        markers: [
          {
            id: "text",
            position: { yaw: -0.1, pitch: 0.025 },
            elementLayer: palfy,
            anchor: "center",
            scale: [1, 3],
            tooltip: {
              content: "test",
              position: "right",
            },
          },
          {
            id: "text2",
            position: { yaw: -0.35, pitch: 0.025 },
            elementLayer: test,
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
        className="flex h-dvh w-dvw justify-center items-center"
        onClick={hidePlayerCards}
      >
        <ReactPhotoSphereViewer
          src={DressingRoomImg}
          height={"100dvh"}
          width={"100dvw"}
          minFov={30}
          maxFov={120}
          defaultZoomLvl={40}
          plugins={plugins}
          onReady={handleReady}
        ></ReactPhotoSphereViewer>
        {showPlayerCards && (
          <div id="player-cards">
            <PlayerCards src={src} isVideo={isVideo} />
          </div>
        )}
        <div className="absolute top-0 left-0 m-4 p-2 bg-white text-black text-lg font-bold bg-opacity-70 rounded z-50">
          FOV: {FOV.toFixed(2)}
        </div>
      </div>
    </>
  );
}

export default DressingRoom;
