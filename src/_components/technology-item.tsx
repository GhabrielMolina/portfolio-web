interface TechnologyProps {
  title: string;
  imageURL: string;
  className?: string;
}
// TODO FIX TECHNOLOGY COLORS
const TechnologyItem = ({ title, imageURL, className }: TechnologyProps) => {
  return (
    <div
      className={`bg-secondary px-2 py-2 rounded-full flex items-center gap-2 ${className}`}
    >
      <img src={`${imageURL}`} className="size-5 " />
      <p className="font-medium text-primary text-sm">{title}</p>
    </div>
  );
};

export default TechnologyItem;
