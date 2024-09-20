interface TechnologyProps {
  title: string;
  imageURL: string;
  className?: string;
}

const TechnologyItem = ({ title, imageURL, className }: TechnologyProps) => {
  return (
    <div
      className={`bg-white px-2 py-2 rounded-full flex items-center gap-2 ${className}`}
    >
      <img src={`${imageURL}`} className="size-6 w-fit" />
      <p className="font-medium text-black text-sm">{title}</p>
    </div>
  );
};

export default TechnologyItem;
