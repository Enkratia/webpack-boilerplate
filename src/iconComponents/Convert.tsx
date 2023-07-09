import * as React from "react";
import type { SVGProps } from "react";
const SvgConvert = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M2.1 2a1 1 0 0 1 1 1v4.436A9.999 9.999 0 0 1 12 2c4.355 0 8.058 2.784 9.43 6.667a1 1 0 1 1-1.885.666A8.004 8.004 0 0 0 5.07 8H8.1a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1ZM3.177 14.057a1 1 0 0 1 1.276.61A8.004 8.004 0 0 0 18.928 16h-3.03a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-4.436a9.999 9.999 0 0 1-8.9 5.436c-4.356 0-8.059-2.784-9.43-6.667a1 1 0 0 1 .609-1.276Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgConvert;
