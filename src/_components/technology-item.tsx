interface TechnologyProps {
  title: string;
  imageURL: string;
  className?: string;
}

const TechnologyItem = ({ title, imageURL, className }: TechnologyProps) => {
  return (
    <div
      className={`bg-white px-1 sm:px-2 py-1.5 rounded-full flex items-center gap-1 sm:gap-2 ${className}`}
    >
      <img
        src={`${imageURL}`}
        className="size-5 sm:size-8 w-fit rounded-full"
      />
      <p className="font-medium text-black text-xs sm:text-base">{title}</p>
    </div>
  );
};

export default TechnologyItem;
