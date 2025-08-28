import React from "react";

interface ClipPathTitleProps {
  title: string;
  color: string;
  bg: string;
  className?: string;
  borderColor: string;
}

const ClipPathTitle = ({
  title,
  bg,
  borderColor,
  color,
  className,
}: ClipPathTitleProps) => {
  return (
    <div className="general-title">
      <div
        className={`${className} border-[.5vw] text-nowrap opacity-0`}
        style={{
          clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          borderColor,
        }}
      >
        <div
          className="pb-5 md:px-14 px-3 md:pt-0 pt-3"
          style={{
            backgroundColor: bg,
          }}
        >
          <h2
            style={{
              color,
            }}
          >
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ClipPathTitle;
