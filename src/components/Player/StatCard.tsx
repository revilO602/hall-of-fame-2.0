import CardBg from "/src/assets/DressRoom/card_bg.png";

function StatCard() {
  return (
    <div
      className="relative w-full h-full"
      style={{
        backgroundImage: `url(${CardBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        aspectRatio: "767 / 1067",
      }}
    ></div>
  );
}

export default StatCard;
