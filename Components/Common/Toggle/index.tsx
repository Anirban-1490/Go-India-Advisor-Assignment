import React, {
  ButtonHTMLAttributes,
  CSSProperties,
  HTMLAttributes,
  MouseEvent,
  ReactElement,
} from "react";

interface IToggleButtonProps {
  leftBtnHandler: (event: MouseEvent<HTMLButtonElement>) => void;
  rightBtnHandler: (event: MouseEvent<HTMLButtonElement>) => void;
  leftBtnChildren: ReactElement;
  rightBtnChildren: ReactElement;
  className?: string;
  props?: {
    container?: HTMLAttributes<HTMLElement>;
    leftBtn?: ButtonHTMLAttributes<HTMLButtonElement>;
    rightBtn?: ButtonHTMLAttributes<HTMLButtonElement>;
  };
}

export const ToggleButton = ({
  leftBtnHandler,
  rightBtnHandler,
  leftBtnChildren,
  rightBtnChildren,
  className = "",
  props,
}: IToggleButtonProps) => {
  return (
    <div
      {...props?.container}
      className={`w-full flex   bg-primary-700 text-white ${className}`}
    >
      <button
        {...props?.leftBtn}
        onClick={leftBtnHandler}
        className={`capitalize basis-3/6 py-4 ${
          props?.leftBtn?.className || ""
        }`}
      >
        {leftBtnChildren}
      </button>
      <button
        {...props?.rightBtn}
        onClick={rightBtnHandler}
        className={`capitalize basis-3/6 py-4 ${
          props?.rightBtn?.className || ""
        }`}
      >
        {rightBtnChildren}
      </button>
    </div>
  );
};
