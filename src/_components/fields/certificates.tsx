import { Eye } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";
import TitleField from "../title-item";
import { certificateOptions } from "@/_constants/certificate";

const CertificatesField = () => {
  return (
    <div
      id="certificates"
      className="py-20 border-b border-solid border-y-destructive/15 w-full"
    >
      <TitleField title="Certificates" />

      <div
        className="flex justify-center pt-20 p-3
        sm:px-20
        md:px-32
        lg:px-48
        xl:px-96
        2xl:px-[35%]"
      >
        <Carousel
          className="w-full"
          opts={{
            align: "start",
          }}
          orientation="vertical"
        >
          <CarouselContent
            className="--mt-1 h-56
            md:h-64
            lg:h-80"
          >
            {certificateOptions.map((certificate, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="bg-white dark:bg-card w-full rounded-xl p-5">
                  <CardContent
                    className="flex items-start flex-col gap-4 p-0
                    md:gap-5"
                  >
                    <div className="flex items-end justify-between w-full">
                      <div className="flex items-center gap-3  bg-primary pr-3  rounded-full">
                        <div className="bg-secondary rounded-full">
                          <img
                            src={certificate.imageURL}
                            className="size-12
                            sm:size-16"
                          />
                        </div>
                        <div>
                          <h3
                            className="text-destructive font-bold
                            sm:text-lg"
                          >
                            {certificate.business}
                          </h3>
                        </div>
                      </div>

                      <img
                        src="./icons/certificate.svg"
                        alt="Certificate"
                        className="size-10
                        sm:size-14"
                      />
                    </div>

                    <h2
                      className="text-xl font-bold text-primary text-left
                      sm:text-2xl
                      md:text-3xl"
                    >
                      {certificate.title}
                    </h2>

                    <div className="flex items-center justify-between w-full">
                      <div className="border-b border-solid border-destructive/15 w-full">
                        <Button
                          className="text-secondary gap-2 bg-primary rounded-full py-1 px-3 border border-solid border-destructive"
                          asChild
                        >
                          <a href={certificate.link}>
                            <Eye
                              className="sm:size-7
                              md:size-8"
                            />
                            <p
                              className="font-semibold text-base
                              sm:text-lg
                              md:text-xl"
                            >
                              View
                            </p>
                          </a>
                        </Button>
                      </div>

                      <p
                        className="w-full text-right font-medium text-primary
                        sm:text-lg
                        md:text-xl"
                      >
                        {certificate.date}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default CertificatesField;
