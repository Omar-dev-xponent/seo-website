type RedCircleSVGProps = {
  width?: number | string;
  height?: number | string;
  className?: string;
};

const RedCircleSVG = ({
  width = "100%",
  height = "100%",
  className,
}: RedCircleSVGProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 525 792"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <filter
        id="filter0_f_5536_7111"
        x="-266.109"
        y="0.891"
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
          result="effect1_foregroundBlur"
        />
      </filter>
      <clipPath id="paint0_diamond_5536_7111_clip_path">
        <circle cx="129" cy="396" r="130" />
      </clipPath>
      <linearGradient
        id="paint0_diamond_5536_7111"
        x1="0"
        y1="0"
        x2="500"
        y2="500"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EF5350" />
        <stop offset="1" stopColor="#FFE9E9" />
      </linearGradient>
    </defs>

    <g filter="url(#filter0_f_5536_7111)">
      <g clipPath="url(#paint0_diamond_5536_7111_clip_path)">
        <g transform="matrix(3.82203e-09 0.13 -0.13 3.82203e-09 129 396)">
          <rect
            width="1002.57"
            height="1002.57"
            fill="url(#paint0_diamond_5536_7111)"
            opacity="0.8"
            shapeRendering="crispEdges"
          />
          <rect
            width="1002.57"
            height="1002.57"
            transform="scale(1 -1)"
            fill="url(#paint0_diamond_5536_7111)"
            opacity="0.8"
            shapeRendering="crispEdges"
          />
          <rect
            width="1002.57"
            height="1002.57"
            transform="scale(-1 1)"
            fill="url(#paint0_diamond_5536_7111)"
            opacity="0.8"
            shapeRendering="crispEdges"
          />
          <rect
            width="1002.57"
            height="1002.57"
            transform="scale(-1)"
            fill="url(#paint0_diamond_5536_7111)"
            opacity="0.8"
            shapeRendering="crispEdges"
          />
        </g>
      </g>
      <circle cx="129" cy="396" r="130" fill="url(#paint0_diamond_5536_7111)" />
    </g>
  </svg>
);

export default RedCircleSVG;
