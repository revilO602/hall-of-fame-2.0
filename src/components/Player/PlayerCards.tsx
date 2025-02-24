// import StatCard from "./StatCard";
import BioCard from "./BioCard";
import VisualCard from "./VisualCard";

interface PlayerCardsProps {
  video: string;
}

function PlayerCards({ video }: PlayerCardsProps) {
  return (
    <div className="flex gap-x-10 absolute left-[15dvw] top-[6dvh] w-[70dvw] z-[999]">
      <VisualCard video={video} />
      {/* <StatCard /> */}
      <BioCard />
    </div>
  );
}

export default PlayerCards;
