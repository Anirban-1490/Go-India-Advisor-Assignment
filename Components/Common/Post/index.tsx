import { IDisscussionProps } from "@/Model/data";
import {
  ChatBubbleOutline,
  FavoriteBorderOutlined,
  Share,
  ShareOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";
import Image from "next/image";

interface IPostProps extends IDisscussionProps<string> {
  className?: string;
}

export const Post = ({
  className = "",
  userName,
  sector,
  timeStamp,
  disscussionBody,
  profileImg,
  likeCount,
  commentCount,
  viewCount,
}: IPostProps) => {
  const postStats = [
    {
      value: likeCount,
      icon: FavoriteBorderOutlined,
    },
    {
      value: viewCount,
      icon: VisibilityOutlined,
    },
    {
      value: commentCount,
      icon: ChatBubbleOutline,
    },
    {
      value: "Share",
      icon: ShareOutlined,
    },
  ];

  return (
    <div
      className={` grid grid-cols-[minmax(13%,1fr)_8fr_minmax(15%,1fr)] shadow-[5px_5px_7px_3px_rgba(0,0,0,0.1)] rounded-md max-[950px]:max-w-[95%] max-w-[50rem] min-[950px]:w-[95%]  pt-3 pb-2 ${className}`}
    >
      <div className=" overflow-hidden rounded-full max-sm:h-9 max-sm:w-9 h-11 w-11 ml-1 sm:ml-5 relative">
        <img src={profileImg} alt="profile" className="w-full h-full" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <h4 className=" text-base">{userName}</h4>
          <p className=" bg-primary-600 text-white text-xs rounded-3xl py-1 px-4 ">
            {sector}
          </p>
        </div>
        <p className=" text-sm">{disscussionBody}</p>
        <div className=" flex justify-between text-xs">
          {postStats.map((stat, index) => {
            return (
              <span key={index}>
                <stat.icon className="mr-2" fontSize="small" />
                {stat.value}
              </span>
            );
          })}
        </div>
      </div>
      <p className=" text-primary-500 text-xs font-bold ">{timeStamp}</p>
    </div>
  );
};
