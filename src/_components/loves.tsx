interface LovesProps {
  name: string;
  src: string;
}

const Loves = ({name, src} : LovesProps) => {
  return (
    <div className="bg-white px-3 py-2 rounded-full flex gap-2 items-center justify-center min-w-fit">
      <img
        src={src}
        className="w-10"
      />
      <p className="font-bold text-blue-400 text-xl">{name}</p>
    </div>
  );
};

export default Loves;
