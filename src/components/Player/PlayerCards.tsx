// import StatCard from "./StatCard";
import BioCard from "./BioCard";
import VisualCard from "./VisualCard";

interface PlayerCardsProps {
  src: string;
  isVideo?: boolean;
}

function PlayerCards({ src, isVideo = true }: PlayerCardsProps) {
  return (
    <div className="flex gap-x-10 absolute left-[15dvw] top-[7dvh] w-[70dvw] z-[999]">
      <VisualCard src={src} isVideo={isVideo} />
      <BioCard />
    </div>
  );
}

export default PlayerCards;
