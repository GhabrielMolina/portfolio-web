import {
  CalendarDays,
  GraduationCap,
  School,
  MapPin,
  ChevronDown,
} from "lucide-react";
import TitleField from "../title-item";

const EducationField = () => {
  return (
    <div
      id="education"
      className="py-10 border-b border-solid border-y-destructive/15 w-full"
    >
      <TitleField title="Education" />

      {/* CARDS */}
      <div className="w-full flex flex-col pt-10 gap-4 px-3">
        {/* UNIVERSITY */}
        <div className="bg-white w-full rounded-xl p-2 space-y-4">
          <div className="flex justify-between items-start gap-1">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 bg-black px-3 py-2 rounded-lg font-semibold text-white">
                <GraduationCap />
                <p className="text-lg">Graduation</p>
              </div>

              <h2 className="text-2xl font-bold text-black ">
                Bachelor of Computer Science
              </h2>
            </div>

            <div className="flex flex-col items-center text-destructive bg-bg px-5 py-5 rounded-lg font-semibold">
              <CalendarDays className="size-7 mb-1" />
              <p className="text-center">2023/2</p>
              <ChevronDown className="size-5" />
              <p>PRESENT</p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex gap-6 items-center">
              <div className="rounded-full ">
                <School className="fill-destructive text-primary size-7" />
              </div>
              <p className="text-black">
                Pontifical Catholic University of Rio Grande do Sul
              </p>
            </div>

            <div className="flex gap-4 items-center">
              <div className="rounded-full">
                <MapPin className="fill-destructive text-primary size-7" />
              </div>
              <p className="text-black">Porto Alegre, RS, Brazil</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationField;
