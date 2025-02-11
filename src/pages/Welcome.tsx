import BGImage from "/src/assets/welcome_bg.png";
import Logo from "/src/assets/logo.png";

function Welcome() {
  return (
    <>
      <div
        className="relative flex h-screen w-screen justify-center items-center"
        style={{
          backgroundImage: `url(${BGImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <div className="absolute inset-0 bg-white opacity-70"></div> */}
        <a href="#home" className="relative z-10">
          <img src={Logo} alt="Logo" className="h-160 w-160" />
        </a>
      </div>
    </>
  );
}

export default Welcome;
