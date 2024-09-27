import { CalendarDays, MapPin, MoveRight } from "lucide-react";

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
    <div className="bg-white/75 dark:bg-white w-full rounded-xl">
      <div className="flex flex-col items-end pl-[15%]  -mt-[0.6px] -mr-[0.4px]">
        <div className="flex items-center gap-3 w-full bg-bg rounded-full rounded-r-none">
          <div className="bg-secondary/90 rounded-full p-3">
            <img src={imageURL} className="size-12 object-contain" />
          </div>

          <div>
            <h3 className="text-destructive font-bold text-2xl">{name}</h3>

            <div className="flex gap-1 items-center">
              <div className="bg-secondary/15 rounded-full p-1">
                <MapPin className="size-3 fill-primary" />
              </div>
              <p className="text-xs font-light">{locale}</p>
            </div>
          </div>
        </div>

        <div className="bg-secondary dark:bg-secondary/90 text-primary pr-1 pl-5  rounded-full rounded-r-none font-semibold">
          <div className="flex items-center justify-start gap-3">
            <CalendarDays className="size-7" />
            <p className="text-sm">{startDate}</p>
          </div>

          <div className="flex items-center gap-3 justify-start ml-[2px]">
            <MoveRight className="size-6" />
            <p className="text-sm">{endDate}</p>
          </div>
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
