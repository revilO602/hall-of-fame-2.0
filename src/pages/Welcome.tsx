import BGImage from "/src/assets/welcome_bg.png";
import Logo from "/src/assets/logo_solo.png";
import Title from "/src/assets/text.png";

function Welcome() {
  return (
    <>
      <div
        className="relative flex flex-col h-screen w-screen justify-center items-center"
        style={{
          backgroundImage: `url(${BGImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mb-16 -mt-12">
          <img src={Title} alt="Vstúpte do Siene Slávy" className="w-244" />
        </div>
        <a href="#home" className="relative z-10">
          <img src={Logo} alt="Logo" className="h-144 w-144" />
        </a>
      </div>
    </>
  );
}

export default Welcome;
