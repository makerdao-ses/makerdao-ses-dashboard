import * as React from 'react';
import { useThemeContext } from '../../../core/context/ThemeContext';

interface Props {
  width?: number;
  height?: number;
  fill?: string;
  fillDark?: string;
}

const DiscordFooter = ({ fill = '#231536', height = 16, width = 21, fillDark, ...props }: Props) => {
  const { isLight } = useThemeContext();
  return (
    <svg width={width} height={height} viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M18.09 1.775C16.273.268 13.398.013 13.276.003a.454.454 0 00-.453.276c-.005.012-.068.16-.138.392 1.202.208 2.678.63 4.015 1.484a.48.48 0 01.147.649.453.453 0 01-.63.151c-2.296-1.468-5.165-1.541-5.717-1.541-.552 0-3.422.073-5.717 1.541a.449.449 0 01-.629-.151.48.48 0 01.147-.649C5.638 1.301 7.113.88 8.316.671c-.07-.233-.134-.38-.138-.392a.45.45 0 00-.454-.275c-.121.01-2.996.264-4.838 1.792C1.923 2.712 0 8.073 0 12.706c0 .083.021.163.06.234 1.328 2.404 4.95 3.033 5.775 3.061h.014a.452.452 0 00.37-.194l.835-1.183c-2.252-.6-3.402-1.618-3.469-1.678a.48.48 0 01-.04-.664.447.447 0 01.644-.043c.027.026 2.145 1.879 6.311 1.879 4.173 0 6.291-1.86 6.312-1.88a.448.448 0 01.644.045.48.48 0 01-.04.662c-.067.061-1.217 1.078-3.47 1.678l.836 1.183a.452.452 0 00.37.194h.014c.825-.027 4.447-.656 5.775-3.06a.49.49 0 00.059-.233c0-4.634-1.923-9.995-2.91-10.932zm-10.558 9.05c-.882 0-1.598-.844-1.598-1.883 0-1.039.715-1.882 1.598-1.882.883 0 1.598.843 1.598 1.882 0 1.04-.715 1.883-1.598 1.883zm5.936 0c-.882 0-1.598-.844-1.598-1.883 0-1.039.715-1.882 1.598-1.882.882 0 1.598.843 1.598 1.882 0 1.04-.716 1.883-1.598 1.883z"
        fill={isLight ? fill : fillDark}
      />
    </svg>
  );
};

export default DiscordFooter;
