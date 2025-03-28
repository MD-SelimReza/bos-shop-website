module.exports = {
    theme: {
      extend: {
        animation: {
          'slide-left': 'slideLeft 0.5s ease-in-out',
          'slide-right': 'slideRight 0.5s ease-in-out',
        },
        keyframes: {
          slideLeft: {
            '0%': { transform: 'translateX(100%)', opacity: 0 },
            '100%': { transform: 'translateX(0)', opacity: 1 },
          },
          slideRight: {
            '0%': { transform: 'translateX(-100%)', opacity: 0 },
            '100%': { transform: 'translateX(0)', opacity: 1 },
          },
        },
      },
    },
  };
  