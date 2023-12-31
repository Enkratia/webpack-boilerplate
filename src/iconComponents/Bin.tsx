import * as React from "react";
import type { SVGProps } from "react";
const SvgBin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M4.832 2.5c0-.92.746-1.667 1.667-1.667h3c.92 0 1.666.746 1.666 1.667v.333H14.5a.667.667 0 1 1 0 1.333h-.834V12.5A2.667 2.667 0 0 1 11 15.166h-6A2.667 2.667 0 0 1 2.332 12.5V4.166h-.833a.667.667 0 0 1 0-1.333h3.333V2.5Zm1.333.333h3.667V2.5a.333.333 0 0 0-.333-.334h-3a.333.333 0 0 0-.334.334v.333Zm-2.5 1.333V12.5c0 .736.597 1.333 1.334 1.333h6c.736 0 1.333-.597 1.333-1.333V4.166H3.665ZM8 5.333c.368 0 .666.298.666.667v6a.667.667 0 0 1-1.333 0V6c0-.369.299-.667.667-.667Z" />
  </svg>
);
export default SvgBin;
