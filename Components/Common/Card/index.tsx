import { IMarketStories } from "@/Model/data";
import Image from "next/image";
export const Card = ({
  backgorundImage,
  title,
  body,
}: IMarketStories<string>) => {
  return (
    <article className=" shadow-xl rounded-md max-[950px]:max-w-[95%]  max-w-[83%]  min-w-[17em]">
      <div className=" relative h-[8.5em] ">
        <Image src={backgorundImage} alt={title} fill />
      </div>
      <div className="p-5 pt-2">
        <h4 className="mb-2 font-bold">{title}</h4>
        <p className=" text-sm">{body}</p>
      </div>
    </article>
  );
};
