import { CalendarDays, MapPin } from "lucide-react";

interface ExperienceItemProps {
  name: string;
  position: string;
  locale: string;
  imageURL: string;
  description: string[];
  startDate: string;
  endDate: string;
}

const ExperienceItem = ({
  name,
  position,
  locale,
  imageURL,
  description,
  startDate,
  endDate,
}: ExperienceItemProps) => {
  return (
    <div className="bg-white bg-opacity-75 w-full rounded-xl">
      <div className="flex flex-col items-end pl-[15%]">
        <div className="flex items-center gap-3 w-full bg-black rounded-full rounded-r-none">
          <div className="bg-white rounded-full p-3">
            <img src={imageURL} className="size-12 object-contain" />
          </div>
          <div>
            <h3 className="text-yellowPrimary font-bold text-2xl">{name}</h3>

            <div className="flex gap-1 items-center">
              <div className="bg-stone-900 rounded-full p-1">
                <MapPin className="size-3" />
              </div>
              <p className="text-xs font-light">{locale}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-white/65 text-black px-3 py-2 rounded-full rounded-r-none font-semibold">
          <CalendarDays className="size-5" />
          <p className="text-sm">
            {startDate} - {endDate}
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <h2 className="text-2xl font-bold text-black pb-3">{position}</h2>

        <div className="space-y-1">
          {description.map((desc, index) => (
            <div key={index} className="flex gap-2 items-center text-black">
              <img src="/icons/right-arrow.svg" className="min-w-fit size-8" />

              <p className="text-sm font-medium">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
