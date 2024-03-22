import {
  ArrowDownwardSharp,
  ArrowDropDown,
  ArrowRightSharp,
  Comment,
  Notifications,
  Paid,
  Person,
} from "@mui/icons-material";
import { useState } from "react";

const navData = [
  { title: "Discussion Fourm", icon: Comment },
  { title: "Market Stories", icon: Paid },
  { title: "Sentiment", icon: null },
  { title: "Market", icon: null },
  { title: "Sector", icon: null },
  { title: "Watchlist", icon: null },
  { title: "Events", icon: null },
  { title: "News/Interview", icon: null },
];

export const Header = () => {
  const [isOpen, setOpen] = useState(true);

  const headerWidth = isOpen ? "w-[17%]  min-w-[18em]" : "w-0";
  return (
    <header
      className={` bg-primary-700 text-white  mr-4 ${headerWidth}  max-[1280px]:fixed z-20  min-h-dvh relative`}
    >
      <button
        id="handle"
        aria-expanded={isOpen}
        aria-label="navbar toggle"
        onClick={() => {
          //* toggle the open state when the button is clicked
          setOpen((openState) => !openState);
        }}
        className=" absolute z-10 w-6 h-[7rem]  bg-primary-700 left-[99%] top-[50%]  translate-y-[-50%]"
      >
        <ArrowRightSharp className=" text-white" fontSize="large" />
      </button>
      <div className=" overflow-hidden flex  items-center justify-around  border-b-4 border-primary-500 h-[5rem]">
        <div className="flex gap-2">
          <Person className=" text-white" />
          <h3 className=" text-lg">Hello, User</h3>
        </div>
        <div>
          <Notifications className=" text-white" />
        </div>
      </div>
      <nav className=" overflow-hidden mt-3">
        <ul className="">
          {navData.map((navItem, index) => {
            const isSelected = index == 0;
            return (
              <li
                className={` ${
                  isSelected ? " bg-primary-900 flex justify-between" : ""
                } py-3 ${navItem.icon ? "pl-3" : "pl-11"}`}
                key={index}
              >
                <div>
                  {navItem.icon && <navItem.icon className=" mr-2" />}{" "}
                  {navItem.title}
                </div>
                {isSelected && <ArrowDropDown />}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
