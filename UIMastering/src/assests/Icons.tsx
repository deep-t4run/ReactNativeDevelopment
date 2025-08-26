import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export const SendIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 18 18"
    fill="none"
    {...props}
  >
    <Path
      d="M7 11L9.27281 16.3032C9.58563 17.0331 10.5586 17.1103 10.9486 16.4185C11.7183 15.0535 12.8591 12.8522 14 10C16 5 17 1 17 1M7 11L1.69678 8.72719C0.966865 8.41437 0.889746 7.4414 1.58149 7.05136C2.94647 6.28173 5.14784 5.14086 8 4C13 2 17 1 17 1M7 11L17 1"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
