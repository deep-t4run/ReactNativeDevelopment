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

const VideoIcon = (props: SvgProps) => (
  <Svg
    width={16}
    height={9}
    viewBox="0 0 16 9"
    fill="none"
    {...props}
  >
    <Path
      d="M0 0.596028V6.45572C0.0053125 7.78071 1.0875 8.84697 2.40719 8.84165H10.9481C11.1909 8.84165 11.3862 8.64634 11.3862 8.40884V2.54947C11.3809 1.22447 10.2991 0.157903 8.97906 0.163215H0.438125C0.195313 0.163215 0 0.358528 0 0.596028ZM11.93 2.88197L15.4563 0.305715C15.7625 0.0525903 16 0.115715 16 0.57509V8.42978C16 8.95259 15.7097 8.88915 15.4563 8.69915L11.93 6.12822V2.88197Z"
      fill="#4A8CFF"
    />
  </Svg>
);
export default VideoIcon;

