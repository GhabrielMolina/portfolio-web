interface TechnologyProps {
  title: string;
  imageURL: string;
  className?: string;
}

const Technology = ({ title, imageURL, className }: TechnologyProps) => {
  return (
    <div className={`bg-white px-2 py-2 rounded-full flex items-center gap-2 min-w-fit ${className}`}>
      <img src={`${imageURL}`} className="w-7"/>
      <p className="font-medium text-black text-sm">{title}</p>
    </div>
  );
};

export default Technology;
