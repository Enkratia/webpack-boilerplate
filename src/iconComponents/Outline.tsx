import * as React from "react";
import type { SVGProps } from "react";
const SvgOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M10.001 6.458a1.667 1.667 0 1 0 0 3.333 1.667 1.667 0 0 0 0-3.333ZM6.668 8.124a3.333 3.333 0 1 1 6.667 0 3.333 3.333 0 0 1-6.667 0Z"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="M10.001 2.708c-3.016 0-5.416 2.363-5.416 5.224 0 2.332 1.401 4.688 2.934 6.54A23.268 23.268 0 0 0 10 17.033a23.27 23.27 0 0 0 2.483-2.56c1.532-1.852 2.934-4.208 2.934-6.54 0-2.86-2.4-5.224-5.417-5.224Zm0 15.416-.516.655-.002-.002-.005-.004-.016-.013a13.248 13.248 0 0 1-.268-.222 24.936 24.936 0 0 1-2.96-3.003c-1.593-1.926-3.316-4.667-3.316-7.603 0-3.83 3.196-6.891 7.083-6.891 3.888 0 7.084 3.06 7.084 6.891 0 2.936-1.724 5.677-3.317 7.603a24.928 24.928 0 0 1-2.96 3.003c-.089.076-.16.135-.21.175l-.058.047-.016.013-.004.004-.002.001s-.001.001-.517-.654Zm0 0 .516.655a.834.834 0 0 1-1.032 0l.516-.655Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgOutline;