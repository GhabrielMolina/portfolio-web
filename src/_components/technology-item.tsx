interface TechnologyProps {
  title: string;
  imageURL: string;
  className?: string;
}

const TechnologyItem = ({ title, imageURL, className }: TechnologyProps) => {
  return (
    <div
      className={`bg-white px-1 py-1.5 rounded-full flex items-center gap-1 w-fit
      sm:gap-2 sm:px-2
      md:gap-3 md:px-3
      lg:gap-4 lg:px-4
      ${className}`}
    >
      <img
        src={`${imageURL}`}
        className="size-5 w-fit rounded-full
        sm:size-8
        md:size-10
        lg:size-12"
      />
      <p
        className="font-medium text-black text-xs 
        sm:text-base
        md:text-lg
        lg:text-xl"
      >
        {title}
      </p>
    </div>
  );
};

export default TechnologyItem;
