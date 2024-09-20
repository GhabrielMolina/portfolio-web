import { CalendarDays, GraduationCap, School, MapPin } from "lucide-react";
import TitleField from "../title-item";

const EducationField = () => {
  return (
    <div
      id="education"
      className="py-10 border-b border-solid border-y-destructive/15 px-5"
    >
      <TitleField title="Education" />

      {/* CARDS */}
      <div className="w-full flex flex-col px-5 pt-10 gap-4 ">
        {/* UNIVERSITY */}
        <div className="bg-white w-full rounded-xl p-4 space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-destructive bg-bg px-3 py-2 rounded-full font-semibold">
              <CalendarDays />
              <p>2023/2 - PRESENT</p>
            </div>

            <div className="flex items-center gap-2 bg-black px-3 py-2 rounded-full font-semibold text-white">
              <GraduationCap />
              <p>Graduation</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-black ">
            Bachelor of Computer Science
          </h2>

          <div className="space-y-2">
            <div className="flex gap-2 items-center">
              <div className="bg-secondary p-3 rounded-full items-center">
                <School className=" fill-destructive text-primary" />
              </div>
              <p className="text-black w-[55%]">
                Pontifical Catholic University of Rio Grande do Sul
              </p>
            </div>

            <div className="flex gap-2 items-center">
              <div className="bg-secondary p-3 rounded-full">
                <MapPin className=" fill-destructive text-primary" />
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
