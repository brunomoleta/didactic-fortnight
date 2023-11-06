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
    primary: 'hsl(228, 100%, 66%)',
    primaryUnsaturated: 'hsl(228, 100%, 75%)',
    dark000: 'hsl(228, 22%, 26%)',
    dark100: 'hsl(229, 22%, 19%)',
    grey: 'hsl(227, 13%, 52%)',
    red: 'hsl(0, 83%, 65%)',
  },
  fontFamily: {
    primary: 'Kumbh Sans, sans-serif',
  },
  fontType: {
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: "4rem"
    },

    h2: {
      fontWeight: 700,
      fontSize: '1.25rem',
      lineHeight: "1.75rem",
    },
    h3: {
      fontWeight: 700,
      fontSize: "1rem",
      lineHeight: "3rem"
    },
    body1: {
      fontWeight: 400,
      fontSize: '1.125rem',
      lineHeight: "1.75rem"
    },
    body2: {
      fontWeight: 400,
      fontSize:'1rem',
      lineHeight: "1.75rem"
    },
  },

};
export default rootSettings;