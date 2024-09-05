interface TechnologyProps {
  title: string;
  className?: string;
}

const Technology = ({ title, className }: TechnologyProps) => {
  return (
    <div className={`absolute bg-white px-2 py-2 rounded-full flex items-center gap-2 ${className}`}>
      <img src={`./technology/${title.toLowerCase()}.svg`} className="w-7" />
      <p className="font-medium text-black text-sm">{title}</p>
    </div>
  );
};

export default Technology;
