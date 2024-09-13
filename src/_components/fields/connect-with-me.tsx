import { Button } from "../ui/button";
import TitleField from "../title-item";
import { socialMidiaOptions } from "@/_constants/social-midia";

const ConnectWithMeField = () => {
  return (
    <div
      id="ConnectWithMe"
      className="py-10 border-b border-solid border-y-yellowPrimary/15 px-5"
    >
      <TitleField title="Connect With Me" />

      <div className="flex flex-col items-center gap-5 w-full pt-5">
        {socialMidiaOptions.map((social, index) => {
          const isEmail = social.title.includes("@");
          const href = isEmail ? `mailto:${social.title}` : social.url;

          return (
            <Button
              key={index}
              className={`flex items-center gap-2 bg-white rounded-full py-1 px-3 ${social.color}`}
              asChild
            >
              <a href={href} className="w-fit">
                <img src={social.imageURL} className="w-7" />
                <p className="font-semibold text-base">{social.title}</p>
              </a>
            </Button>
          );
        })}
      </div>

      <img src="" alt="" />
    </div>
  );
};

export default ConnectWithMeField;
