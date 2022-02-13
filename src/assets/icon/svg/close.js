import * as React from 'react';
import Svg, {Line, Path} from 'react-native-svg';

const Close = props => (
  <Svg
    {...props}
    width={props?.width || 13}
    height={props?.height || 12}
    viewBox="0 0 13 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Line
      x1={1.35355}
      y1={0.646447}
      x2={12.3536}
      y2={11.6464}
      stroke={props?.color || '#979797'}
    />
    <Path d="M12 0.5L1 11.5" stroke={props?.color || '#979797'} />
  </Svg>
);

export default Close;
