import * as React from "react";
import type { SVGProps } from "react";
const SvgMessenger = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M12 2C6.478 2 2 6.145 2 11.259c0 2.913 1.454 5.512 3.726 7.21V22l3.405-1.869c.909.252 1.871.388 2.869.388 5.523 0 10-4.145 10-9.259C22 6.146 17.523 2 12 2Zm.994 12.469-2.546-2.716-4.97 2.716 5.467-5.803 2.609 2.716 4.906-2.716-5.466 5.803Z" />
  </svg>
);
export default SvgMessenger;
