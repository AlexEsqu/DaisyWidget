import { type Theme } from "@/components/BookingWidget/theme";
export { coralTealTheme, purpleGoldTheme, blueOrangeTheme, minimalistTheme, natureTheme, sunsetTheme, darkTechTheme }

// Theme 1: Vibrant Coral & Teal
const coralTealTheme: Partial<Theme> = {
  colors: {
    primary: '#FF6B6B',
    secondary: '#4ECDC4',
    accent: '#95E1D3'
  },
  background: {
    basic: '#FFFFFF',
    heavy: '#F5F5F5',
  },
  fontName: 'poppins, sans-serif',
  fontColor: '#2C2C2C',
  fontColorLight: '#999999'
};

// Theme 2: Deep Purple & Gold
const purpleGoldTheme: Partial<Theme> = {
  colors: {
    primary: '#6B2D5C',
    secondary: '#F4A261',
    accent: '#E76F51'
  },
  background: {
    basic: '#FAF6F1',
    heavy: '#F5EFE7',
  },
  fontName: 'montserrat, sans-serif',
  fontColor: '#3D2817',
  fontColorLight: '#A89080'
};

// Theme 3: Modern Blue & Orange
const blueOrangeTheme: Partial<Theme> = {
  colors: {
    primary: '#003F87',
    secondary: '#FF8C42',
    accent: '#2A9D8F'
  },
  background: {
    basic: '#F0F7FF',
    heavy: '#E8F1FF',
  },
  fontName: 'inter, sans-serif',
  fontColor: '#1A1A2E',
  fontColorLight: '#8B92A9'
};

// Theme 4: Minimalist Gray & Accent
const minimalistTheme: Partial<Theme> = {
  colors: {
    primary: '#2C3E50',
    secondary: '#E74C3C',
    accent: '#3498DB'
  },
  background: {
    basic: '#FFFFFF',
    heavy: '#F8F9FA',
  },
  fontName: 'roboto, sans-serif',
  fontColor: '#2C3E50',
  fontColorLight: '#95A5A6'
};

// Theme 5: Nature Green & Brown
const natureTheme: Partial<Theme> = {
  colors: {
    primary: '#2D5016',
    secondary: '#D4A574',
    accent: '#6B8E23'
  },
  background: {
    basic: '#F5F9F0',
    heavy: '#EBF3E3',
  },
  fontName: 'montserrat, serif',
  fontColor: '#1B3D0F',
  fontColorLight: '#7A9B6F'
};

// Theme 6: Sunset Pink & Purple
const sunsetTheme: Partial<Theme> = {
  colors: {
    primary: '#D63384',
    secondary: '#FFA500',
    accent: '#9D4EDD'
  },
  background: {
    basic: '#FFF5FA',
    heavy: '#FFE8F5',
  },
  fontName: 'poppins, sans-serif',
  fontColor: '#4A1F5C',
  fontColorLight: '#C97FD4'
};

// Theme 7: Dark Tech
const darkTechTheme: Partial<Theme> = {
  colors: {
    primary: '#00B8D4',
    secondary: '#0099BB',
    accent: '#660066'
  },
  background: {
    basic: '#0F1420',
    heavy: '#1A1F3A',
  },
  fontName: 'inter, sans-serif',
  fontColor: '#D0D0D0',
  fontColorLight: '#8A8A8A'
};
