// theme.ts

const theme = {
  colors: {
    primary: '#007bff',
    secondary: '#333',
  },
  fonts: {
    primary: 'Arial, sans-serif',
  },
};

const rootSettings = {
  colors: {
    primary: 'hsl(228, 100%, 55%)',
    primaryMedium: 'hsl(228, 100%, 75%)',
    primaryUnsaturated: 'hsl(228, 100%, 91%)',
    dark000: 'hsl(228, 22%, 26%)',
    dark100: 'hsl(229, 22%, 19%)',
    grey: 'hsl(227, 13%, 52%)',
    red: 'hsl(0, 83%, 65%)',
    offWhite: "hsl(0, 0%, 98%)"
  },
  fontFamily: {
    primary: 'Kumbh Sans, sans-serif',
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700
  },
  fontType: {
    h1: {
      fontSize: '3.5rem',
      lineHeight: "4rem"
    },

    h2: {
      fontSize: '1.625rem',
      lineHeight: "1.75rem",
      letterSpacing: ".03125rem"
    },
    h3: {
      fontSize: "1.25rem",
      lineHeight: "3rem"
    },
    body1: {
      fontSize: '1.125rem',
      lineHeight: "1.75rem"
    },
    body2: {
      fontSize:'1rem',
      lineHeight: "1.75rem"
    },
  },

};
export default rootSettings;