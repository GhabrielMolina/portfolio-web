interface LovesProps {
  name: string;
  src: string;
}

const LoveItem = ({ name, src }: LovesProps) => {
  return (
    <div className="bg-secondary px-3 py-2 rounded-full flex gap-2 items-center justify-center min-w-fit">
      <img
        src={src}
        className="w-10
        md:w-12"
      />
      <p
        className="font-bold text-destructive-foreground text-xl
        md:text-2xl"
      >
        {name}
      </p>
    </div>
  );
};

export default LoveItem;
