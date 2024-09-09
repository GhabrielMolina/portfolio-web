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
    <div className="py-10 border-b border-solid border-y-yellowPrimary/15 px-5">
      <TitleField title="Certificates" />

      <div className="flex justify-center pt-10">
        <Carousel className="w-full max-w-sm ">
          <CarouselContent className="-ml-1 space-x-4">
            {certificateOptions.map((certificate, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="bg-white bg-opacity-75 w-full rounded-xl p-5">
                  <CardContent className="flex items-start flex-col gap-4 p-0 ">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-3  bg-black pr-3  rounded-full">
                        <div className="bg-white rounded-full">
                          <img src={certificate.imageURL} className="size-12" />
                        </div>
                        <div>
                          <h3 className="text-yellowPrimary font-bold">
                            {certificate.business}
                          </h3>
                        </div>
                      </div>

                      <img
                        src="./icons/certificate.svg"
                        alt="Certificate"
                        className="size-10"
                      />
                    </div>

                    <h2 className="text-xl font-bold text-black text-left">
                      {certificate.title}
                    </h2>

                    <div className="flex items-center justify-between w-full">
                      <div className="border-b border-solid border-yellowPrimary/15 w-full">
                        <Button
                          className="gap-2 bg-black rounded-full py-1 px-3 border border-solid border-yellowPrimary"
                          asChild
                        >
                          <a href={certificate.link}>
                            <Eye />
                            <p className="font-semibold text-base">View</p>
                          </a>
                        </Button>
                      </div>

                      <p className="w-full text-right font-medium text-black  shadow-yellowPrimary">
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
