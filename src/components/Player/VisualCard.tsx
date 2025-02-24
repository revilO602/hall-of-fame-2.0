interface VisualCardProps {
  video: string;
}

function VisualCard({ video }: VisualCardProps) {
  return (
    <div
      className="relative w-full h-full"
      style={{
        aspectRatio: "767 / 1067",
        borderRadius: "0.5rem",
        overflow: "hidden",
      }}
    >
      <video
        src={video}
        autoPlay
        loop
        muted
        className="relative inset-0 w-full h-full object-fill"
        style={{ borderRadius: "0.5rem" }}
      />
    </div>
  );
}

export default VisualCard;
