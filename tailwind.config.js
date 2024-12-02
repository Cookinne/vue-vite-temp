// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx, less}', './src/style/themes/*.less'],
  safelist: [
    'bg-blue-500',
    'text-center',
    'hover:opacity-100',
    'lg:text-right',
    'align-text-bottom',
    'inline',
    'w-*',
    'h-6',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: ['dark'],
      fontSize: {
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '22px',
        '3xl': '24px',
        '4xl': '26px',
        28: '28px',
        30: '30px',
        32: '32px',
        64: '64px',
      },
      lineHeight: {
        48: '48px',
      },
    },
    spacing: {
      // 1 * 0.25 / * 4
      1: '0.25rem',
      1.25: '.3125rem', // 5px
      2: '.5rem', // 8px
      2.5: '.625rem', // 10px
      3: '0.75rem', // 12px
      4: '1rem', // 16px
      4.5: '1.125rem', // 18px
      5: '1.25rem', // 20px
      5.5: '1.375rem', // 22px
      6: '1.5rem', // 24px
      6.5: '1.625rem', // 26px
      7: '1.75rem', // 28px
      7.5: '1.875rem', // 30px
      8: '2rem', // 32px
      9: '2.25rem', // 36px
      10: '2.5rem', // 40px
      12: '3rem', // 48px
      12.5: '3.125rem', // 50px
      13: '3.25rem', // 52px
      14: '3.5rem', // 56px
      15: '3.75rem',
      16: '4rem',
      17.5: '4.375rem', // 70px
      18: '4.5rem', // 72px
      22: '5.5rem',
      25: '6.25rem', // 100px
      27: '6.75rem', // 108px
      28: '7.125rem', // 114px
      32.5: '8.125rem', // 130px
      35: '8.75', // 140px
      37.5: '9.375rem', // 150px
      40: '10rem', // 160px
      50: '12.5rem', // 200px
      55: '13.75rem', // 220px
      55.5: '13.875rem', // 222px
      60: '15rem', // 222px
      85: '21.25rem', // 340px
      0: '0px',
    },
    colors: {
      green: colors.green,
      yellow: colors.yellow,
      red: colors.red,
      indigo: colors.indigo,
      black: '#000000',
      white: '#FFFFFF',
      base: {
        DEFAULT: '#8c8c8c',
        light: '#fafafa',
        dark: '#141414',
        1: '#ffffff',
        2: '#fafafa',
        3: '#f5f5f5',
        4: '#f0f0f0',
        5: '#d9d9d9',
        6: '#bfbfbf',
        7: '#8c8c8c',
        8: '#595959',
        9: '#434343',
        10: '#262626',
        11: '#1f1f1f',
        12: '#141414',
        13: '#000000',
        14: '#706f78',
      },
      gray: {
        900: '#D2D2D2',
        800: '#CBCBCB',
        700: '#BFBFBF',
        600: '#B9B9B9',
        500: '#A4A4A4',
        400: '#949494',
        300: '#777777',
        200: '#707070',
        100: '#434F5B',
        90: '#686868',
        80: '#34343a',
        70: '#2e2e33',
      },
      skin: {
        1: '#448aff',
        80: '#262832',
        100: '#1b1e29',
        110: '#12131a',
        200: '#292d3c',
        300: '#404557',
        400: '#6a6c7e',
        600: '#c7cad9',
        success: '#0fc679',
      },
      dark: {
        1: '#1E293B',
        2: '#334155',
        3: '#17202D',
        4: '#0A101D',
        5: '#273043',
        6: '#00897B',
        7: '#2C2F36',
        8: '#2C3848',
        10: '#1b1e29',
        11: '#94A3B8',
        12: '#1E293B',
        13: '#6C86AD',
        14: '#F8FAFC',
        15: '#CBD5E1',
        16: '#1a1a1d',
        17: '#202022',
        18: '#29292c',
        19: '#313338',
      },
      light: {
        10: '#6B7280',
        11: '#7F7F7F',
        14: '#4A4A4A',

        15: '#C4C4C4',
        16: '#f4f4f4',
        17: '#CBCBCA',
        18: '#88b4f5',
        19: '#91b3f0',
        20: '#3e3e44',
        30: '#eaeaed',
        40: '#36363c',
        100: '#ffffff',
      },
    },
  },
  variants: {},
  daisyui: {
    themes: [
      'light',
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],

          primary: '#7cdf91',
          'primary-content': '#F8FAFC',
          '--rounded-btn': '.5rem',
        },
        dark: {
          primary: '#448aff',
          'primary-content': '#fff',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
