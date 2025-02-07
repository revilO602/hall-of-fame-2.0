import BGImage from "/src/assets/welcomeTBD.png";

function Welcome() {
  return (
    <>
      <div
        className="flex h-screen w-screen justify-center items-center"
        style={{
          backgroundImage: `url(${BGImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <a href="#home" className="size-full">
          {" "}
        </a>
      </div>
    </>
  );
}

export default Welcome;
