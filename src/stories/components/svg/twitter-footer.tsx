import * as React from 'react';
import { useThemeContext } from '../../../core/context/ThemeContext';

interface Props {
  width?: number;
  height?: number;
  fill?: string;
  fillDark?: string;
}

const TwitterFooter = ({ width = 20, fill = '#231536', height = 16.15, fillDark, ...props }: Props) => {
  const isLight = useThemeContext().themeMode === 'light';
  return (
    <svg width={width} height={height} viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M9.711 4.298l.043.699-.722-.086c-2.63-.328-4.928-1.44-6.879-3.308L1.2.676l-.245.685c-.52 1.525-.188 3.137.896 4.22.578.6.448.685-.55.328-.346-.114-.65-.2-.679-.156-.1.1.246 1.397.52 1.91.376.713 1.142 1.412 1.98 1.825l.709.328-.839.015c-.809 0-.838.014-.751.313.289.927 1.43 1.911 2.702 2.339l.896.3-.78.456a8.277 8.277 0 01-3.873 1.055c-.65.014-1.185.071-1.185.114 0 .143 1.763.941 2.79 1.255 3.077.927 6.733.527 9.479-1.055 1.95-1.127 3.902-3.366 4.812-5.533.492-1.155.983-3.265.983-4.278 0-.656.043-.741.852-1.525.477-.457.925-.956 1.012-1.098.145-.271.13-.271-.607-.029-1.228.428-1.402.37-.795-.27.448-.457.983-1.284.983-1.527 0-.042-.217.029-.462.157-.26.143-.839.357-1.272.485l-.78.242-.709-.47c-.39-.257-.939-.542-1.228-.628-.737-.2-1.864-.17-2.529.058-1.806.641-2.948 2.295-2.818 4.106z"
        fill={isLight ? fill : fillDark}
      />
    </svg>
  );
};

export default TwitterFooter;
