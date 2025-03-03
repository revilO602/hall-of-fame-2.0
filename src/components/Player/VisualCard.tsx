interface VisualCardProps {
  src: string;
  isVideo?: boolean;
}

function VisualCard({ src, isVideo = true }: VisualCardProps) {
  return (
    <div
      className="relative w-full h-full -rotate-4"
      style={{
        aspectRatio: "767 / 1067",
        borderRadius: "0.5rem",
        overflow: "hidden",
      }}
    >
      {isVideo ? (
        <video
          src={src}
          autoPlay
          loop
          muted
          className="relative inset-0 w-full h-full object-fill"
          style={{ borderRadius: "0.5rem" }}
        />
      ) : (
        <img
          src={src}
          alt="Visual"
          className="relative inset-0 w-full h-full object-fill"
          style={{ borderRadius: "0.5rem" }}
        />
      )}
    </div>
  );
}

export default VisualCard;
