interface TitleFieldProps {
  title: string;
}

const TitleItem = ({ title }: TitleFieldProps) => {
  return (
    <div className="relative text-center whitespace-nowrap w-full">
      <h2 className="opacity-10 text-4xl sm:text-5xl text-destructive">
        {title}
      </h2>
      <h3 className="absolute text-3xl sm:text-4xl text-destructive font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {title}
      </h3>
    </div>
  );
};

export default TitleItem;
