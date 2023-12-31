import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M7.5 1.25a1 1 0 0 1 1 1v.5h7v-.5a1 1 0 1 1 2 0v.5h1.25a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H5.25a4 4 0 0 1-4-4v-12a4 4 0 0 1 4-4H6.5v-.5a1 1 0 0 1 1-1Zm-1 3.5H5.25a2 2 0 0 0-2 2V8h17.5V6.75a2 2 0 0 0-2-2H17.5v.5a1 1 0 1 1-2 0v-.5h-7v.5a1 1 0 0 1-2 0v-.5ZM20.75 10H3.25v8.75a2 2 0 0 0 2 2h13.5a2 2 0 0 0 2-2V10Z" />
  </svg>
);
export default SvgCalendar;
