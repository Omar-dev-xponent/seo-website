type DiamondCircleSVGProps = {
  width?: number | string;
  height?: number | string;
  className?: string; // optional for Tailwind or utility class support
};

const DiamondCircleSVG = ({
  width = "100%",
  height = "100%",
  className,
}: DiamondCircleSVGProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 577 741"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <filter
        id="filter0_f_5435_8794"
        x="-214.109"
        y="-50.109"
        width="790.218"
        height="790.218"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="132.554"
          result="effect1_foregroundBlur_5435_8794"
        />
      </filter>
      <clipPath id="paint0_diamond_5435_8794_clip_path">
        <circle cx="181" cy="345" r="130" />
      </clipPath>
      <linearGradient
        id="paint0_diamond_5435_8794"
        x1="0"
        y1="0"
        x2="500"
        y2="500"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BBF3E9" />
        <stop offset="1" stopColor="#BBFEFB" />
      </linearGradient>
    </defs>

    <g filter="url(#filter0_f_5435_8794)">
      <g clipPath="url(#paint0_diamond_5435_8794_clip_path)">
        <g transform="matrix(3.82203e-09 0.13 -0.13 3.82203e-09 181 345)">
          <rect
            width="1002.57"
            height="1002.57"
            fill="url(#paint0_diamond_5435_8794)"
            opacity="1"
            shapeRendering="crispEdges"
          />
          <rect
            width="1002.57"
            height="1002.57"
            transform="scale(1 -1)"
            fill="url(#paint0_diamond_5435_8794)"
            opacity="1"
            shapeRendering="crispEdges"
          />
          <rect
            width="1002.57"
            height="1002.57"
            transform="scale(-1 1)"
            fill="url(#paint0_diamond_5435_8794)"
            opacity="1"
            shapeRendering="crispEdges"
          />
          <rect
            width="1002.57"
            height="1002.57"
            transform="scale(-1)"
            fill="url(#paint0_diamond_5435_8794)"
            opacity="1"
            shapeRendering="crispEdges"
          />
        </g>
      </g>
      <circle cx="181" cy="345" r="130" fill="url(#paint0_diamond_5435_8794)" />
    </g>
  </svg>
);

export default DiamondCircleSVG;
