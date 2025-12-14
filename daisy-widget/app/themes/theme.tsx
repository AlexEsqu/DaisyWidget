import { type Theme } from "@/components/BookingWidget/theme";
export { coralTealTheme, purpleGoldTheme, blueOrangeTheme, minimalistTheme, natureTheme, sunsetTheme }

// Theme 1: Vibrant Coral & Teal
const coralTealTheme: Partial<Theme> = {
  colors: {
    primary: '#FF6B6B',
    secondary: '#4ECDC4',
    accent: '#95E1D3'
  },
  font: 'poppins'
};

// Theme 2: Deep Purple & Gold
const purpleGoldTheme: Partial<Theme> = {
  colors: {
    primary: '#6B2D5C',
    secondary: '#F4A261',
    accent: '#E76F51'
  },
  font: 'montserrat'
};

// Theme 3: Modern Blue & Orange
const blueOrangeTheme: Partial<Theme> = {
  colors: {
    primary: '#003F87',
    secondary: '#FF8C42',
    accent: '#2A9D8F'
  },
  font: 'inter'
};

// Theme 4: Minimalist Gray & Accent
const minimalistTheme: Partial<Theme> = {
  colors: {
    primary: '#2C3E50',
    secondary: '#E74C3C',
    accent: '#3498DB'
  },
  font: 'roboto'
};

// Theme 5: Nature Green & Brown
const natureTheme: Partial<Theme> = {
  colors: {
    primary: '#2D5016',
    secondary: '#D4A574',
    accent: '#6B8E23'
  },
  font: 'montserrat'
};

// Theme 6: Sunset Pink & Purple
const sunsetTheme: Partial<Theme> = {
  colors: {
    primary: '#D63384',
    secondary: '#FFA500',
    accent: '#9D4EDD'
  },
  font: 'poppins'
};
