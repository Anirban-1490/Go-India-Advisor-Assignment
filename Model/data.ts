export interface IDisscussionProps<T> {
  id: T;
  userName: T;
  profileImg: T;
  disscussionBody: T;
  timeStamp: T;
  likeCount: T;
  commentCount: T;
  viewCount: T;
  sector: T;
}
export interface IMarketStories<T> {
  id: T;
  backgorundImage: T;
  title: T;
  body: T;
}

export const disscussionData: IDisscussionProps<string> = {
  id: "1",
  userName: "Lorem Ipsum",
  disscussionBody:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, expedita debitis culpa ab architecto ",
  profileImg: "/profile.png",
  timeStamp: "2 min ago",
  likeCount: "2k",
  commentCount: "2k Comments",
  viewCount: "2k",
  sector: "Sector 2",
};

export const storiesData: IMarketStories<string> = {
  id: "1",
  backgorundImage: "/nature.jpg",
  title: "The Coldest Sunset",
  body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, expedita debitis culpa ab architecto temporibus nam nostrum facilis assumenda rem!",
};
