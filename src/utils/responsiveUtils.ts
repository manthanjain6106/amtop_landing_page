// Responsive breakpoint utilities
export const breakpoints = {
  xs: '475px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
  '3xl': '1600px',
  '4xl': '1920px',
};

// Responsive spacing utilities
export const responsiveSpacing = {
  section: {
    padding: 'py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32',
    paddingTop: 'pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32',
    paddingBottom: 'pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-32',
  },
  container: {
    padding: 'px-4 sm:px-6 lg:px-8 xl:px-12',
    margin: 'mx-4 sm:mx-6 lg:mx-8 xl:mx-auto',
  },
  gap: {
    small: 'gap-4 sm:gap-6 md:gap-8',
    medium: 'gap-6 sm:gap-8 md:gap-12 lg:gap-16',
    large: 'gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24',
  },
};

// Responsive typography utilities
export const responsiveTypography = {
  h1: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl',
  h2: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl',
  h3: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl',
  h4: 'text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl',
  body: 'text-sm sm:text-base md:text-lg lg:text-xl',
  small: 'text-xs sm:text-sm md:text-base',
  large: 'text-base sm:text-lg md:text-xl lg:text-2xl',
};

// Responsive grid utilities
export const responsiveGrid = {
  columns: {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    5: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5',
    6: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
  },
  gap: {
    small: 'gap-4 sm:gap-6',
    medium: 'gap-6 sm:gap-8',
    large: 'gap-8 sm:gap-12',
  },
};

// Responsive flex utilities
export const responsiveFlex = {
  direction: {
    row: 'flex-row',
    col: 'flex-col',
    'row-col': 'flex-row flex-col sm:flex-row',
    'col-row': 'flex-col flex-row lg:flex-col',
  },
  wrap: {
    wrap: 'flex-wrap',
    nowrap: 'flex-nowrap',
    'wrap-nowrap': 'flex-wrap sm:flex-nowrap',
  },
  justify: {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly',
  },
  align: {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
    baseline: 'items-baseline',
  },
};

// Responsive visibility utilities
export const responsiveVisibility = {
  hidden: {
    xs: 'hidden xs:block',
    sm: 'hidden sm:block',
    md: 'hidden md:block',
    lg: 'hidden lg:block',
    xl: 'hidden xl:block',
  },
  visible: {
    xs: 'block xs:hidden',
    sm: 'block sm:hidden',
    md: 'block md:hidden',
    lg: 'block lg:hidden',
    xl: 'block xl:hidden',
  },
};

// Responsive sizing utilities
export const responsiveSizing = {
  width: {
    full: 'w-full',
    auto: 'w-auto',
    screen: 'w-screen',
    min: 'w-min',
    max: 'w-max',
    fit: 'w-fit',
  },
  height: {
    full: 'h-full',
    auto: 'h-auto',
    screen: 'h-screen',
    min: 'h-min',
    max: 'h-max',
    fit: 'h-fit',
  },
  maxWidth: {
    none: 'max-w-none',
    xs: 'max-w-xs',
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl',
    full: 'max-w-full',
    min: 'max-w-min',
    max: 'max-w-max',
    fit: 'max-w-fit',
    prose: 'max-w-prose',
    'screen-sm': 'max-w-screen-sm',
    'screen-md': 'max-w-screen-md',
    'screen-lg': 'max-w-screen-lg',
    'screen-xl': 'max-w-screen-xl',
    'screen-2xl': 'max-w-screen-2xl',
  },
};

// Responsive padding and margin utilities
export const responsiveSpacingDetailed = {
  padding: {
    all: {
      none: 'p-0',
      xs: 'p-2 sm:p-3 md:p-4 lg:p-6',
      sm: 'p-3 sm:p-4 md:p-6 lg:p-8',
      md: 'p-4 sm:p-6 md:p-8 lg:p-12',
      lg: 'p-6 sm:p-8 md:p-12 lg:p-16',
      xl: 'p-8 sm:p-12 md:p-16 lg:p-20',
    },
    x: {
      none: 'px-0',
      xs: 'px-2 sm:px-3 md:px-4 lg:px-6',
      sm: 'px-3 sm:px-4 md:px-6 lg:px-8',
      md: 'px-4 sm:px-6 md:px-8 lg:px-12',
      lg: 'px-6 sm:px-8 md:px-12 lg:px-16',
      xl: 'px-8 sm:px-12 md:px-16 lg:px-20',
    },
    y: {
      none: 'py-0',
      xs: 'py-2 sm:py-3 md:py-4 lg:py-6',
      sm: 'py-3 sm:py-4 md:py-6 lg:py-8',
      md: 'py-4 sm:py-6 md:py-8 lg:py-12',
      lg: 'py-6 sm:py-8 md:py-12 lg:py-16',
      xl: 'py-8 sm:py-12 md:py-16 lg:py-20',
    },
  },
  margin: {
    all: {
      none: 'm-0',
      xs: 'm-2 sm:m-3 md:m-4 lg:m-6',
      sm: 'm-3 sm:m-4 md:m-6 lg:m-8',
      md: 'm-4 sm:m-6 md:m-8 lg:m-12',
      lg: 'm-6 sm:m-8 md:m-12 lg:m-16',
      xl: 'm-8 sm:m-12 md:m-16 lg:m-20',
    },
    x: {
      none: 'mx-0',
      xs: 'mx-2 sm:mx-3 md:mx-4 lg:mx-6',
      sm: 'mx-3 sm:mx-4 md:mx-6 lg:mx-8',
      md: 'mx-4 sm:mx-6 md:mx-8 lg:mx-12',
      lg: 'mx-6 sm:mx-8 md:mx-12 lg:mx-16',
      xl: 'mx-8 sm:mx-12 md:mx-16 lg:mx-20',
    },
    y: {
      none: 'my-0',
      xs: 'my-2 sm:my-3 md:my-4 lg:my-6',
      sm: 'my-3 sm:my-4 md:my-6 lg:my-8',
      md: 'my-4 sm:my-6 md:my-8 lg:my-12',
      lg: 'my-6 sm:my-8 md:my-12 lg:my-16',
      xl: 'my-8 sm:my-12 md:my-16 lg:my-20',
    },
  },
};

// Helper function to get responsive class based on screen size
export const getResponsiveClass = (
  baseClass: string,
  responsiveClasses: Record<string, string>
): string => {
  return `${baseClass} ${Object.entries(responsiveClasses)
    .map(([breakpoint, className]) => `${breakpoint}:${className}`)
    .join(' ')}`;
};

// Common responsive patterns
export const responsivePatterns = {
  hero: {
    container: 'pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-32',
    title: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl',
    subtitle: 'text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl',
    description: 'text-base sm:text-lg md:text-xl lg:text-2xl',
  },
  section: {
    container: 'py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32',
    title: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl',
    subtitle: 'text-lg sm:text-xl md:text-2xl lg:text-3xl',
    description: 'text-base sm:text-lg md:text-xl',
  },
  card: {
    container: 'p-4 sm:p-6 md:p-8 lg:p-10',
    title: 'text-lg sm:text-xl md:text-2xl lg:text-3xl',
    description: 'text-sm sm:text-base md:text-lg',
  },
  button: {
    small: 'px-3 py-2 text-sm sm:px-4 sm:py-2.5 sm:text-base',
    medium: 'px-4 py-2.5 text-base sm:px-6 sm:py-3 sm:text-lg',
    large: 'px-6 py-3 text-lg sm:px-8 sm:py-4 sm:text-xl',
  },
};
