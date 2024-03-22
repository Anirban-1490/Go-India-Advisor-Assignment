import { Inter } from "next/font/google";
import { disscussionData, storiesData } from "@/Model/data";
import { Card } from "@/Components/Common/Card";
import { Post } from "@/Components/Common/Post";
import { Header } from "@/Components/Global/Header";
import { useWindowResize } from "@/Hook/useWindowResize";
import { ToggleButton } from "@/Components/Common/Toggle";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  //* custom hook to check if window width is less than 950 pixels
  const isMediumScreen = useWindowResize(950, "lst");

  //* used to toggle between tabs in mobile scrren
  const [toggle, setToggle] = useState(false);

  //* show only when it's above the breakpoint or only when the tab is clicked in mobile devices
  const showDiscussion = !isMediumScreen || (isMediumScreen && !toggle);
  const showStories = !isMediumScreen || (isMediumScreen && toggle);
  return (
    <div className={` flex  ${inter.className} min-h-screen`}>
      <Header />
      <main
        className={`flex-1 flex ${
          isMediumScreen ? "flex-col " : "flex-row  mt-3"
        } mb-4`}
      >
        {isMediumScreen && (
          <ToggleButton
            leftBtnHandler={() => setToggle(false)}
            rightBtnHandler={() => setToggle(true)}
            leftBtnChildren={<>disscussion fourm</>}
            className=" mb-9"
            rightBtnChildren={<>market stories</>}
            props={{
              leftBtn: {
                className: `${
                  !toggle
                    ? "bg-primary-900 border-b-4 border-secondary-700"
                    : ""
                }`,
              },
              rightBtn: {
                className: `${
                  toggle ? "bg-primary-900 border-b-4 border-secondary-700" : ""
                }`,
              },
            }}
          />
        )}
        {showDiscussion && (
          <section className=" min-[950px]:basis-[73%]  min-[950px]:pl-12">
            {!isMediumScreen && (
              <h1 className="  text-secondary-700 bg-light-400 font-bold text-3xl uppercase p-3 mb-4  w-fit">
                discussion fourm
              </h1>
            )}
            <div className=" flex-1 flex flex-col max-[950px]:items-center gap-12">
              {Array(4)
                .fill("")
                .map((_, index) => {
                  return <Post {...disscussionData} key={index} />;
                })}
            </div>
          </section>
        )}
        {showStories && (
          <section className="  flex-1 ">
            {!isMediumScreen && (
              <h2 className="  text-secondary-700 bg-light-400 font-bold text-xl uppercase p-2.5   w-fit mb-4">
                market stories
              </h2>
            )}
            <div className=" flex-1 flex flex-col max-[950px]:items-center  gap-7">
              {Array(3)
                .fill("")
                .map((_, index) => {
                  return <Card {...storiesData} key={index} />;
                })}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
