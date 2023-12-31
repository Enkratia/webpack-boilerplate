import * as React from "react";
import type { SVGProps } from "react";
const SvgMail = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      d="M22.75 18V7a3 3 0 0 0-3-3H4.25a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h15.5a3 3 0 0 0 3-3Zm-2-8.74V18a1 1 0 0 1-1 1H4.25a1 1 0 0 1-1-1V9.26l7.063 4.802a3 3 0 0 0 3.374 0L20.75 9.26Zm-.011-2.411A1 1 0 0 0 19.75 6H4.25a1 1 0 0 0-.989.848l8.177 5.56a1 1 0 0 0 1.124 0l8.177-5.56Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMail;
