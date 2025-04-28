import * as React from 'react';
import Svg, {Rect, G, Path, Defs, ClipPath} from 'react-native-svg';

const DetailedIcon = (props: any) => (
  <Svg
    width={36}
    height={36}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect
      y={0.318604}
      width={36}
      height={35.6814}
      rx={8}
      fill="black"
      fillOpacity={0.24}
    />
    <G clipPath="url(#clip0_1_1136)">
      <Path
        d="M18 9C13.0294 9 9 13.0294 9 18C9 22.9706 13.0294 27 18 27C22.9706 27 27 22.9706 27 18C27 13.0294 22.9706 9 18 9ZM18 24.75C14.2721 24.75 11.25 21.7279 11.25 18C11.25 14.2721 14.2721 11.25 18 11.25C21.7279 11.25 24.75 14.2721 24.75 18C24.75 21.7279 21.7279 24.75 18 24.75Z"
        fill="white"
      />
      <Path
        d="M18 13.5C17.1716 13.5 16.5 14.1716 16.5 15V18C16.5 18.8284 17.1716 19.5 18 19.5C18.8284 19.5 19.5 18.8284 19.5 18V15C19.5 14.1716 18.8284 13.5 18 13.5Z"
        fill="white"
      />
      <Path
        d="M18 21C18.8284 21 19.5 21.6716 19.5 22.5C19.5 23.3284 18.8284 24 18 24C17.1716 24 16.5 23.3284 16.5 22.5C16.5 21.6716 17.1716 21 18 21Z"
        fill="white"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1_1136">
        <Rect width={18} height={18} fill="white" transform="translate(9 9)" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default DetailedIcon; 