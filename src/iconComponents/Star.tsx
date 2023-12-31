import * as React from "react";
import type { SVGProps } from "react";
const SvgStar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 20 19"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M8.475 1.835C9.054.5 10.947.5 11.526 1.835l1.752 4.04 4.382.417c1.449.138 2.034 1.938.943 2.902l-3.3 2.913.957 4.297c.316 1.42-1.215 2.534-2.469 1.794l-3.79-2.238-3.791 2.238c-1.253.74-2.785-.373-2.469-1.794l.957-4.297-3.3-2.913C.308 8.23.893 6.43 2.341 6.292l4.383-.418 1.751-4.039Zm3.277 4.7-1.751-4.038-1.752 4.039a1.663 1.663 0 0 1-1.368.994L2.5 7.946l3.3 2.914c.454.4.654 1.017.522 1.608l-.957 4.297 3.791-2.238a1.663 1.663 0 0 1 1.691 0l3.79 2.238-.956-4.297a1.663 1.663 0 0 1 .522-1.608l3.3-2.914-4.382-.418a1.663 1.663 0 0 1-1.368-.993Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgStar;
