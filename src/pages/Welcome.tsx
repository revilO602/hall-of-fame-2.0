import BGVideo from "/src/assets/Welcome/pozadie1.mp4";
import Logo from "/src/assets/Welcome/logo_solo.png";
import Title from "/src/assets/Welcome/text.png";

function Welcome() {
  return (
    <>
      <div className="relative flex flex-col h-screen w-screen justify-center items-center">
        <video
          autoPlay
          // loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
          onTimeUpdate={(e) => {
            if (e.currentTarget.currentTime >= e.currentTarget.duration - 0.4) {
              e.currentTarget.pause();
            }
          }}
        >
          <source src={BGVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="mb-16 -mt-12 relative z-10">
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
