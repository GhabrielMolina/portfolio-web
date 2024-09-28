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

      <div
        className="flex flex-col mt-10 mx-3 gap-4 px-3 py-2 bg-white rounded-xl space-y-4
        sm:mx-20 sm:gap-1"
      >
        <div className="flex justify-between items-start gap-1">
          <div
            className="flex flex-col gap-1
            sm:gap-5"
          >
            <div className="flex items-center gap-2 bg-black px-3 py-2 rounded-lg font-semibold text-white">
              <GraduationCap
                className="sm:size-7
                md:size-8"
              />
              <p
                className="text-lg 
                sm:text-xl
                md:text-2xl"
              >
                Graduation
              </p>
            </div>

            <h2
              className="text-2xl font-bold text-black
              sm:text-3xl sm:text-center
              md:text-4xl"
            >
              Bachelor of Computer Science
            </h2>
          </div>

          <div className="flex flex-col items-center text-destructive bg-bg px-5 py-5 rounded-lg font-semibold">
            <CalendarDays
              className="size-7 mb-1 
              sm:size-8
              md:size-9"
            />
            <p
              className="text-center 
              sm:text-lg
              md:text-xl"
            >
              2023/2
            </p>
            <ChevronDown
              className="size-5 
              sm:size-6
              md:size-7"
            />
            <p
              className="text-center 
              sm:text-lg
              md:text-xl"
            >
              PRESENT
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex gap-6 items-center">
            <div className="rounded-full ">
              <School
                className="fill-destructive text-primary size-7
                sm:size-9
                md:size-10"
              />
            </div>
            <p
              className="text-black
              sm:text-lg
              md:text-xl"
            >
              Pontifical Catholic University of Rio Grande do Sul
            </p>
          </div>

          <div className="flex gap-4 items-center">
            <div className="rounded-full">
              <MapPin
                className="fill-destructive text-primary size-7
                sm:size-9
                md:size-10"
              />
            </div>
            <p
              className="text-black
              sm:text-lg
              md:text-xl"
            >
              Porto Alegre, RS, Brazil
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationField;
