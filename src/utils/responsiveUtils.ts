// Responsive breakpoints (matching Tailwind CSS)
export const BREAKPOINTS = {
  xs: 475,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
  '3xl': 1600,
  '4xl': 1920,
} as const;

// Responsive spacing scale
export const SPACING = {
  xs: '0.5rem',    // 8px
  sm: '0.75rem',   // 12px
  md: '1rem',      // 16px
  lg: '1.5rem',    // 24px
  xl: '2rem',      // 32px
  '2xl': '3rem',   // 48px
  '3xl': '4rem',   // 64px
  '4xl': '6rem',   // 96px
  '5xl': '8rem',   // 128px
} as const;

// Responsive typography scale
export const TYPOGRAPHY = {
  xs: '0.75rem',     // 12px
  sm: '0.875rem',    // 14px
  base: '1rem',      // 16px
  lg: '1.125rem',    // 18px
  xl: '1.25rem',     // 20px
  '2xl': '1.5rem',   // 24px
  '3xl': '1.875rem', // 30px
  '4xl': '2.25rem',  // 36px
  '5xl': '3rem',     // 48px
  '6xl': '3.75rem',  // 60px
  '7xl': '4.5rem',   // 72px
  '8xl': '6rem',     // 96px
  '9xl': '8rem',     // 128px
} as const;

// Responsive container max-widths
export const CONTAINER_SIZES = {
  sm: 'max-w-4xl',    // 896px
  md: 'max-w-5xl',    // 1024px
  lg: 'max-w-6xl',    // 1152px
  xl: 'max-w-7xl',    // 1280px
  '2xl': 'max-w-7xl', // 1280px
  '3xl': 'max-w-7xl', // 1280px
  '4xl': 'max-w-7xl', // 1280px
} as const;

// Responsive grid columns
export const GRID_COLUMNS = {
  mobile: 'grid-cols-1',
  tablet: 'sm:grid-cols-2',
  desktop: 'lg:grid-cols-3',
  wide: 'xl:grid-cols-4',
} as const;

// Responsive padding scales
export const PADDING = {
  section: {
    mobile: 'py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24',
    compact: 'py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20',
    large: 'py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32',
  },
  container: {
    mobile: 'px-4 sm:px-6 lg:px-8',
    compact: 'px-3 sm:px-4 lg:px-6',
    large: 'px-6 sm:px-8 lg:px-12',
  },
} as const;

// Responsive margin scales
export const MARGIN = {
  section: {
    mobile: 'mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24',
    compact: 'mb-6 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-20',
    large: 'mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-32',
  },
  element: {
    mobile: 'mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12',
    compact: 'mb-3 sm:mb-4 md:mb-6 lg:mb-8 xl:mb-10',
    large: 'mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16',
  },
} as const;

// Responsive gap scales
export const GAP = {
  mobile: 'gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12',
  compact: 'gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10',
  large: 'gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16',
} as const;

// Responsive border radius
export const BORDER_RADIUS = {
  mobile: 'rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl',
  compact: 'rounded-md sm:rounded-lg md:rounded-xl lg:rounded-2xl',
  large: 'rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-4xl',
} as const;

// Responsive shadow scales
export const SHADOW = {
  mobile: 'shadow-md sm:shadow-lg md:shadow-xl lg:shadow-2xl',
  compact: 'shadow-sm sm:shadow-md md:shadow-lg lg:shadow-xl',
  large: 'shadow-lg sm:shadow-xl md:shadow-2xl lg:shadow-3xl',
} as const;

// Utility function to get responsive class based on breakpoint
export const getResponsiveClass = (
  baseClass: string,
  breakpoints: Record<string, string>
): string => {
  return Object.entries(breakpoints)
    .map(([breakpoint, className]) => {
      if (breakpoint === 'mobile') return className;
      return `${breakpoint}:${className}`;
    })
    .join(' ');
};

// Utility function to create responsive spacing classes
export const createResponsiveSpacing = (
  property: 'p' | 'px' | 'py' | 'pt' | 'pr' | 'pb' | 'pl' | 'm' | 'mx' | 'my' | 'mt' | 'mr' | 'mb' | 'ml',
  scale: keyof typeof SPACING
): string => {
  const value = SPACING[scale];
  const pixelValue = parseInt(value.replace('rem', '')) * 16;
  
  if (pixelValue <= 8) return `${property}-2`;
  if (pixelValue <= 12) return `${property}-3`;
  if (pixelValue <= 16) return `${property}-4`;
  if (pixelValue <= 24) return `${property}-6`;
  if (pixelValue <= 32) return `${property}-8`;
  if (pixelValue <= 48) return `${property}-12`;
  if (pixelValue <= 64) return `${property}-16`;
  if (pixelValue <= 96) return `${property}-24`;
  return `${property}-32`;
};

// Utility function to create responsive typography classes
export const createResponsiveTypography = (
  scale: keyof typeof TYPOGRAPHY
): string => {
  const value = TYPOGRAPHY[scale];
  const pixelValue = parseInt(value.replace('rem', '')) * 16;
  
  if (pixelValue <= 12) return 'text-xs';
  if (pixelValue <= 14) return 'text-sm';
  if (pixelValue <= 16) return 'text-base';
  if (pixelValue <= 18) return 'text-lg';
  if (pixelValue <= 20) return 'text-xl';
  if (pixelValue <= 24) return 'text-2xl';
  if (pixelValue <= 30) return 'text-3xl';
  if (pixelValue <= 36) return 'text-4xl';
  if (pixelValue <= 48) return 'text-5xl';
  if (pixelValue <= 60) return 'text-6xl';
  if (pixelValue <= 72) return 'text-7xl';
  if (pixelValue <= 96) return 'text-8xl';
  return 'text-9xl';
};

// Hook to check if current viewport matches a breakpoint
export const useBreakpoint = (breakpoint: keyof typeof BREAKPOINTS): boolean => {
  if (typeof window === 'undefined') return false;
  
  const mediaQuery = window.matchMedia(`(min-width: ${BREAKPOINTS[breakpoint]}px)`);
  return mediaQuery.matches;
};

// Hook to get current breakpoint
export const useCurrentBreakpoint = (): keyof typeof BREAKPOINTS => {
  if (typeof window === 'undefined') return 'md';
  
  const width = window.innerWidth;
  
  if (width >= BREAKPOINTS['4xl']) return '4xl';
  if (width >= BREAKPOINTS['3xl']) return '3xl';
  if (width >= BREAKPOINTS['2xl']) return '2xl';
  if (width >= BREAKPOINTS.xl) return 'xl';
  if (width >= BREAKPOINTS.lg) return 'lg';
  if (width >= BREAKPOINTS.md) return 'md';
  if (width >= BREAKPOINTS.sm) return 'sm';
  return 'xs';
};
