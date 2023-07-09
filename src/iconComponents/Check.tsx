import * as React from "react";
import type { SVGProps } from "react";
const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 8"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M9.828.195c.23.26.23.683 0 .943L3.945 7.805a.54.54 0 0 1-.832 0L.173 4.47a.731.731 0 0 1 0-.942.54.54 0 0 1 .831 0L3.53 6.39 8.996.195a.54.54 0 0 1 .832 0Z" />
  </svg>
);
export default SvgCheck;
