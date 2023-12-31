import * as React from "react";
import type { SVGProps } from "react";
const SvgLike = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 16 15"
    {...props}
  >
    <path
      d="M9.453 1.666c-.093 0-.179.05-.226.13l-.004.007L6.165 6.76v6.573h5.724c.123 0 .23-.085.256-.205l.002-.01 1.7-6.64a.262.262 0 0 0-.257-.312h-2.591c-.434 0-.874-.145-1.194-.457a1.406 1.406 0 0 1-.392-1.304l.48-2.426a.262.262 0 0 0-.257-.313h-.183ZM4.832 13.333V7.238H2.47a.262.262 0 0 0-.262.26l-.043 5.571a.262.262 0 0 0 .262.264h2.405Zm.295-7.429L8.08 1.116A1.595 1.595 0 0 1 9.453.333h.183c1.005 0 1.76.918 1.565 1.904l-.48 2.426a.14.14 0 0 0-.001.067.058.058 0 0 0 .017.025c.028.027.11.078.262.078h2.591c1.02 0 1.779.945 1.557 1.941l-.002.01-1.701 6.645a1.595 1.595 0 0 1-1.555 1.237H2.427A1.595 1.595 0 0 1 .832 13.06l.043-5.571A1.595 1.595 0 0 1 2.47 5.904h2.657Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLike;
