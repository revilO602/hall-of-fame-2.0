interface SectionCardProps {
  backgroundImage: string;
}

function SectionCard({ backgroundImage }: SectionCardProps) {
  return (
    <a
      href="#dressing-room"
      className="relative h-64 w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* <h2 className="text-white text-3xl font-bold">{title}</h2> */}
    </a>
  );
}

export default SectionCard;
