interface TitleFieldProps {
  title: string;
}

const TitleItem = ({ title }: TitleFieldProps) => {
  return (
    <div className="relative text-center whitespace-nowrap w-full">
      <h2
        className="opacity-10 text-4xl text-destructive
        sm:text-5xl
        md:text-6xl"
      >
        {title}
      </h2>
      <h3
        className="absolute text-3xl text-destructive font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        sm:text-4xl
        md:text-5xl"
      >
        {title}
      </h3>
    </div>
  );
};

export default TitleItem;
