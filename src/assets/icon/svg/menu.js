import * as React from 'react';
import Svg, {Line} from 'react-native-svg';

const Menue = props => (
  <Svg
    width={props?.width || 24}
    height={props?.height || 16}
    viewBox="0 0 24 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Line
      x1={1}
      y1={1}
      x2={23}
      y2={1}
      stroke={props?.color || '#404040'}
      strokeWidth={2}
      strokeLinecap="round"
    />
    <Line
      x1={1}
      y1={15}
      x2={23}
      y2={15}
      stroke={props?.color || '#404040'}
      strokeWidth={2}
      strokeLinecap="round"
    />
    <Line
      x1={1}
      y1={8}
      x2={17}
      y2={8}
      stroke={props?.color || '#404040'}
      strokeWidth={2}
      strokeLinecap="round"
    />
  </Svg>
);

export default Menue;
